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

/*const socket = io.connect("http://localhost:3030")
socket.emit("init","ownPublicKey");*/



const Code = () =>{
    const [copied, setCopied] = useState(false);

    const ownPublicKey = useSelector((value) => value.keys.ownPublicKey )

    const socket = useSelector((value) => value.socket)
    console.log(socket)

    
    // get personal convo code from server and save it in redux
   /* useEffect(() => { 
        /*
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            setCodeID(xhr.responseText)
        })

        
        // open the request with the verb and the url
        xhr.open('GET', 'http://127.0.0.1:8080/getcode')
        // send the request
        xhr.send("prova")*/

        
        

    //}, [])
    

    /*console.log(ownPublicKey)*/
    //const codeID = useSelector((value) => value.codeID)
    /*console.log(code)*/
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
