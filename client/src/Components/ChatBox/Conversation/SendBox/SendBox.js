import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../State";
import './SendBox.css';


import { useDispatch } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

import JSEncrypt from "jsencrypt";

const SendBox = () =>{
    //var placehold= "type..."
    var text 
    const [inputText, setInputText] = useState()
    const handleTextChange = (event) =>{
        setInputText(event.target.value);
    }

    const convoerPK = useSelector((value) => value.convoerPublicKey);
    const socket= useSelector((data) => data.socket)

    const messages = useSelector((value) => value.messages)
    const dispatch = useDispatch();
    const {addNewMessage} = bindActionCreators(actionCreators, dispatch);

    const [numMessages, setNumMessages] = useState(messages.length)

    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(convoerPK); // set the convoer public key to encrypt the msg
    
    const handleSend = () => {
        //convoer public key is needed 
        if(inputText !== ''){
            const cipherText = encrypt.encrypt(inputText)
            console.log(cipherText)
            const msg = {
                id: ++messages.length,
                message: inputText,
                own: true
            }
        addNewMessage(msg)
        setNumMessages(messages.length)
        socket.emit("sendMessage",cipherText,convoerPK)
        
        setInputText("")
        }
    }

    useEffect(()=>{},[inputText])

    return(
        <div className="sendBox">
            <input className="txtMessage" type={'text'} value={inputText} placeholder='type..' onChange={handleTextChange} maxLength='256'/>
            <button className="btnSend" onClick={handleSend}> Send </button>
        </div>
    )
}

export default SendBox
