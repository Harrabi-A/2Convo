import React from 'react';
import './ChatBox.css'
import Conversation from './Conversation/Conversation';

const ChatBox = () => {
    return(
        <div className='chatBox'>
            <Conversation />
        </div>
    );
}

export default ChatBox;
