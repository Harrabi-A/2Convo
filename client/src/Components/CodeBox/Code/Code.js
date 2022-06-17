import React, { useEffect, useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-solid-svg-icons'

import './Code.css';
import CodeID from "./CodeID/CodeID";
import { useSelector } from "react-redux";

import { actionCreators } from "../../../State";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import io from "socket.io-client";


const Code = () =>{
    const [copied, setCopied] = useState(false);

    const ownPublicKey = useSelector((value) => value.keys.ownPublicKey )

    const socket = useSelector((value) => value.socket)
    console.log(socket)
    socket.emit("init",ownPublicKey)
    
    useEffect(()=>{
        socket.on("initResponse", (data) => {
            setCodeID(data);
        })
    },[socket])


    const dispatch = useDispatch();
    const {setCodeID} = bindActionCreators(actionCreators, dispatch);
    //setCodeID("1234")
    const codeID = useSelector((value) => value.codeID)

    return(
        <div className="code">
            <span className="txtInfoCode">Your Convo code:</span>
                       
            <>
                <CodeID codeID={codeID} />
                
                <div className="buttons">
                    <CopyToClipboard text={codeID} onCopy={() => setCopied(true)}>
                        <button className="btnCopyCode">copy code</button>
                    </CopyToClipboard>
                    
                    <CopyToClipboard text={'http://2Convo.com/'+codeID} onCopy={() => setCopied(true)}>
                        <button className="btnCopyLink">copy link</button>               
                    </CopyToClipboard>
                    
                </div>
                {copied ? <div className="copied"><FontAwesomeIcon icon={faCopy} className=""iconCopy/><span className="txtCopied">Copied!</span></div> : null}
            </>
        </div>
    )
}

export default Code;
