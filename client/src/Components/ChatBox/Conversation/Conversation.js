import React, { useState } from 'react';
import './Conversation.css'

import ConvoInfo from './ConvoInfo/ConvoInfo';
import Message from './Message/Message';
import SendBox from './SendBox/SendBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

import { ClimbingBoxLoader } from 'react-spinners';

import {useSelector} from "react-redux"

import io from 'socket.io-client'

const socket = io.connect("http://localhost:3030")
socket.emit("init","Messages");


const Conversation = (props) =>{
    const [Messages, setMessages] = useState(
        [
            {
                id: 0,
                message: 'Message map generated',
                own: true
            },
            {
                id: 1,
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante elit, porttitor placerat sagittis quis, aliquam a lectus.',
                own: false
            },
            {
                id: 2,
                message: 'Message 2',
                own: true
            },
            {
                id: 3,
                message: 'Message 3',
                own: false
            }
        ]
    )

    const convoState = useSelector((State) => State.convoState);
    const waitingState = useSelector((state) => state.waitingState);
   /*console.log("convoState: "+convoState)
    console.log("waitingState"+waitingState)*/

    return(
        /*convoState === "conversation"*/ convoState ? (
            // Render this if conversation is established
            <div className='styleConversation'>
                <div className='conversation'>
                    <ConvoInfo />
                    <div className='messagesBox'>
                    <div className='messages'>
                        {Messages.map((e)=>{
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
