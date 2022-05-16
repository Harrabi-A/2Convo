import React from 'react';
import './ChatBox.css'
import Conversation from './Conversation/Conversation';

const ChatBox = () => {
    return(
        <div className='chatBox'>
            <Conversation convoStatus={'conversation'}/>
        </div>
    );
}

export default ChatBox;