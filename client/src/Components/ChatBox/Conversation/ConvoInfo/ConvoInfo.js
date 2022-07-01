import React from "react";
import './ConvoInfo.css';

const ConvoInfo = (props) =>{
    const contact = props.otherCode;
    const date = props.date;

    return(
        <div className="convoInfo">
            <span className="txtInfo">Convo Established with <span className="contact">{contact}</span> on <span className="date">{date}</span></span>
        </div>
    )
}

export default ConvoInfo;
