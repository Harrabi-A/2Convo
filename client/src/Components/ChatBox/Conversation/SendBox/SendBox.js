import React from "react";
import './SendBox.css';

const SendBox = () =>{
    return(
        <div className="sendBox">
            <input className="txtMessage" type={'text'} placeholder="type.."/>
            <button className="btnSend"> Send </button>
        </div>
    )
}

export default SendBox
