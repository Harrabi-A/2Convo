import React from 'react';
import './Conversation.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

import { ClimbingBoxLoader } from 'react-spinners';


const Conversation = (props) =>{
    return(
        props.convoStatus === "conversation" ? (
            // Render this if conversaion is established
            <div className='styleConversation'>
                <div className='conversation'>

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
