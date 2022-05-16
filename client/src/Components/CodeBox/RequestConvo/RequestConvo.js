import React, { useEffect, useState } from 'react';
import './RequestConvo.css';

const RequestConvo = () =>{
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

    return(
        <div className='requestConvo'>
            <span>Reuqest Convo:</span>
            <div className='requestArea'>
                <div className='pasteArea'>
                    <input type={'text'} className='txtPaste' placeholder='Paste here Convo code' maxLength={10} defaultValue={codeIDReq}></input>
                    <button className='btnPaste' onClick={handlePaste}>paste</button>
                </div>    
                <button className='btnRequest'>Request Convo</button>
            </div>
        </div>
    )
}

export default RequestConvo;
