import React from 'react';
import './Conversation.css'

const Conversation = (props) =>{
    return(
        props.convoStatus === "noRequest" ? (
            // Render this if request isn't made
            <div className='noConvo'>
                <span>Share your code with friend</span>
            </div>
        ) : (
            // Render this if conversaion is established
            <div className='styleConversation'>
                <div className='conversation'>

                </div>
            </div>
        )
    )
}

export default Conversation;
