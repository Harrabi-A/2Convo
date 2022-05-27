import React from "react";
import './Message.css'

const Message = ({message,own}) =>{
    return(
        <div className={own ? "messageOwn" : "message"}>
            <span>{message}</span>
        </div>
    )
}

export default Message;
