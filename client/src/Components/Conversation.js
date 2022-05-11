import React from 'react'
import Message from './Message'

const Conversation = () => {
    return(
        <div className='Conversation'>
            <div className='newMsg'>
                <Message></Message>
            </div>
            <div className='sendMsg'>
                <input type={'text'} className='txtSend'></input>
                <button className='btnSend'>Send</button>
            </div>
        </div>
    )
}

export default Conversation;