import React from "react";
import './ConvoInfo.css';

const ConvoInfo = () =>{
    const contact = "1234567";
    const date = "2022/05/18";

    return(
        <div className="convoInfo">
            <span className="txtInfo">Convo Established with <span className="contact">{contact}</span> on <span className="date">{date}</span></span>
        </div>
    )
}

export default ConvoInfo;
