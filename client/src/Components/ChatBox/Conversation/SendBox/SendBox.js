import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../State";
import './SendBox.css';

import Picker from 'emoji-picker-react';

import { useDispatch } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

import JSEncrypt from "jsencrypt";
import { io } from "socket.io-client";

const SendBox = () =>{
    var text 
    const [showPicker, setShowPicker] = useState(false);
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


    const convoState = useSelector((state) => state.convoState)

    useEffect(()=>{},[inputText])

    const [convoClosed,setConvoClosed] = useState(false)
    useEffect(() => {
        socket.on("convoerDisconnected", () => {
            setConvoClosed(true)
            console.log("convoer left the convo")
        })
    },[socket])

    return(
        !convoClosed ? (
        <div className="sendBox">
            <input className="txtMessage" type={'text'} value={inputText} placeholder='type..' onChange={handleTextChange} maxLength='256'></input>        
            <button className="btnSend" onClick={handleSend}> Send </button>          
        </div>
        ):(
            <span className="txtConvoClosed">Convo Closed</span>
        )
    )
}

export default SendBox
