import React, { useEffect, useState } from 'react';
import './RequestConvo.css';

import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../../State/index"

const RequestConvo = () =>{
    // user input
    const [codeIDReq, setCodeIDReq] = useState('');


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

    const handleRequestConvo = () =>{
        //TODO Server Request
        setConvoState()

    }

    return(
        <div className='requestConvo'>
            <span>Reuqest Convo:</span>
            <div className='requestArea'>
                <div className='pasteArea'>
                    <input type={'text'} className='txtPaste' placeholder='Paste here Convo code' maxLength={'10'} defaultValue={codeIDReq}></input>
                    <button className='btnPaste' onClick={handlePaste}>paste</button>
                </div>    
                <button className='btnRequest' /*onClick={() => setConvoState()}*/ onClick={handleRequestConvo}>Request Convo</button>
            </div>
        </div>
    )
}

export default RequestConvo;
