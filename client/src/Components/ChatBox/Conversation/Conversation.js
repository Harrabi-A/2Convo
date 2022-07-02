import React, { useEffect, useState } from 'react';
import './Conversation.css'

import ConvoInfo from './ConvoInfo/ConvoInfo';
import Message from './Message/Message';
import SendBox from './SendBox/SendBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-solid-svg-icons';

import { ClimbingBoxLoader } from 'react-spinners';

import {useSelector} from "react-redux"

import { actionCreators } from "../../../State";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import io from 'socket.io-client'

import JSEncrypt from 'jsencrypt';

const Conversation = () =>{
    const ownPrivateKey = useSelector((value) => value.keys.ownPrivateKey)
    var decrypt = new JSEncrypt();
    decrypt.setPrivateKey(ownPrivateKey);


    const messages = useSelector((value) => value.messages);
    const convoState = useSelector((State) => State.convoState);
    const waitingState = useSelector((state) => state.waitingState);
    
    const [numMessages, setNumMessages] = useState(messages.length)

    const socket = useSelector((value) => value.socket)

    const [dateOfConvo, setDateOfConvo] = useState('')
    const [otherConvoID, setOtherConvoID] = useState()
    
    const dispatch = useDispatch();
    const {setConvoState, unsetConvoState} = bindActionCreators(actionCreators, dispatch);
    const {setWaiting, unsetWaiting} = bindActionCreators(actionCreators, dispatch);
    const {setConvoerPublicKey} = bindActionCreators(actionCreators, dispatch);
    const {addNewMessage} = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        socket.on("startConvo", (code, dateConvo, key)=>{
            setDateOfConvo(dateConvo)
            setOtherConvoID(code)
            
            setConvoerPublicKey(key)

            unsetWaiting()
            setConvoState()
            console.log("convo established with ",code," with public key ",key)
        })

        socket.on("newMessage", (cipherText) =>{
            console.log("messages length ",messages.length)
            console.log("received Text ", cipherText)
            const pleinText = decrypt.decrypt(cipherText)
            const msg = {
                id: ++messages.length,
                message: pleinText,
                own: false
            }
            addNewMessage(msg)
            console.log("messages length ",messages.length)
            
        })
    },[socket])

    setInterval(()=>{setNumMessages(messages.length)}, 500)

    useEffect( () => {},[numMessages])


    return(
        convoState ? (
            // Render this if conversation is established
            <div className='styleConversation'>
                <div className='conversation'>
                    <ConvoInfo otherCode={otherConvoID} date={dateOfConvo}/>
                    <div className='messagesBox'>
                    <div className='messages'>
                        {messages.map((e)=>{
                            return (
                                <Message key={e.id} own={e.own} message={e.message}/>
                            );
                        })}
                    </div>
                    </div>
                    <SendBox />
                </div>
            </div>
            
        ) : (
            waitingState ? (
                // Render this if convo request was made
                <div className='styleWaiting'>
                    <div className='waiting'>
                       <ClimbingBoxLoader color='#ffff' size={16} />
                       <span className='txtWaiting'>Request has been made, wainting for match ...</span>
                    </div>
                </div>
            ) : (
                // Render this if request isn't made
                <div className='styleNoConvo'>
                    <div className='noConvo'>
                        <FontAwesomeIcon icon={faMessage} className="iconPaperPlane"></FontAwesomeIcon>
                        <span className='txtNoConvo'>Share your code with friend</span>
                    </div>
                </div>
            )
        )
    )
}

export default Conversation;
