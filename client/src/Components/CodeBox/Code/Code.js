import React, { useEffect, useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-solid-svg-icons'

import './Code.css';
import CodeID from "./CodeID/CodeID";

const Code = () =>{
    const [codeID, setCodeID] = useState('');
    const [copied, setCopied] = useState(false);

    // get personal convo code from server and save it in State
    useEffect(() => { 
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
        xhr.send()
    }, []);
    
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