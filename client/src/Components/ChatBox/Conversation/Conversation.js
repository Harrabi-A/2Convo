import React from 'react';
import './Conversation.css'

import ConvoInfo from './ConvoInfo/ConvoInfo';
import Message from './Message/Message';
import SendBox from './SendBox/SendBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

import { ClimbingBoxLoader } from 'react-spinners';


const Conversation = (props) =>{
    return(
        props.convoStatus === "conversation" ? (
            // Render this if conversation is established
            <div className='styleConversation'>
                <div className='conversation'>
                    <ConvoInfo />
                    <div className='messagesBox'>
                    <div className='messages'>
                        <Message own={true} message={"Message1"}/>
                        <Message own={false} message={"Message2"}/>
                        <Message own={true} message={"Message3"}/>
                        <Message own={true} message={"Message4"}/>
                        <Message own={true} message={"Message5"}/>
                        <Message own={true} message={"Message6"}/>
                        <Message own={true} message={"Message7"}/>
                        <Message own={true} message={"Message8"}/>
                        <Message own={true} message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante elit, porttitor placerat sagittis quis, aliquam a lectus."}/>
                    </div>
                    </div>
                    <SendBox />
                </div>
            </div>
            
        ) : (
            props.noConvoStatus == "wainting"? (
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
                        <FontAwesomeIcon icon={faPaperPlane} className="iconPaperPlane"></FontAwesomeIcon>
                        <span className='txtNoConvo'>Share your code with friend</span>
                    </div>
                </div>
            )
        )
    )
}

export default Conversation;
