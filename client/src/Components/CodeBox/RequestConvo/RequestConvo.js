import React, { useEffect, useState } from 'react';
import './RequestConvo.css';

import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../../State/index"


const RequestConvo = () =>{
    // user input
    const [codeIDReq, setCodeIDReq] = useState('');

    const socket = useSelector((value) => value.socket)


    const handlePaste = () =>{
        navigator.clipboard.readText()
        .then(text => {
            setCodeIDReq(text);
             console.log('Pasted content: ', text);
            })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
    }

    useEffect(() => {

    },[codeIDReq])

    /*const state = useSelector((state) => state.convoState);*/

    const ownKeys = useSelector((values) => values.keys);
    //console.log(ownKeys)

    const dispatch = useDispatch();
    const {setConvoState, unsetConvoState} = bindActionCreators(actionCreators, dispatch);
    const {setWaiting, unsetWaiting} = bindActionCreators(actionCreators, dispatch);
    const waitingState = useSelector((state) => state.waitingState)
    const convoState = useSelector((state) => state.convoState)

    const getInputValue = (event)=>{
        // show the user input value to console
        const inputID = event.target.value;
        setCodeIDReq(event.target.value)
    };

    const codeID = useSelector((value) => value.codeID)
    const handleRequestConvo = () =>{
        //setWaiting()
        socket.emit("requestConvo",codeID.toString(),codeIDReq.toString())
        console.log(codeID," request a convo from ",codeIDReq)
    }

    const codeError = "Code not found !!"
    // wating for message from server
    useEffect(() => {
        socket.on("convoIDNotFound", () =>{
            console.log("convoId not found")
            setWarningText(true)
        })
        socket.on("convoIDFound", () =>{
            //convoID exist and request has been made, waiting for a eequest match
            setWaiting()
        })       
    },[socket])

    const [warningText, setWarningText] = useState(false)

    useEffect( ()=>{

    },[warningText] )

    return(
        <div className='requestConvo'>
            <span>Reuqest Convo:</span>
            <div className='requestArea'>
                <div className='pasteArea'>
                    <input type={'text'} className='txtPaste' placeholder='Paste here Convo code' maxLength={'10'} defaultValue={codeIDReq} onChange={getInputValue}></input>
                    <button className='btnPaste' onClick={handlePaste}>paste</button>
                </div>    
                {!waitingState && !convoState? <button className='btnRequest' onClick={handleRequestConvo}>Request Convo</button>:<></>}
                <span className='warningText'> {warningText ? codeError: "" } </span>
            </div>
        </div>
    )
}

export default RequestConvo;
