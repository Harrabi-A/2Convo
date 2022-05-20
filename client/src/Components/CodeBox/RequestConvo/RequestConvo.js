import React, { useEffect, useState } from 'react';
import './RequestConvo.css';

const RequestConvo = () =>{
    const [codeIDReq, setCodeIDReq] = useState('');

    // State to store current situation
    const [activityState, setActivityState] = useState({
        convoState: 'noConvo',
        waiting: false
    })

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

    // Request made 
    // TODO read code & connecct server 
    const handleRequestConvo = () =>{
        setActivityState({
            convoState:'noconvo',
            waiting: true
        })
        console.log(activityState.convoState+ " "+ activityState.waiting)
    }


    return(
        <div className='requestConvo'>
            <span>Reuqest Convo:</span>
            <div className='requestArea'>
                <div className='pasteArea'>
                    <input type={'text'} className='txtPaste' placeholder='Paste here Convo code' maxLength={'10'} defaultValue={codeIDReq}></input>
                    <button className='btnPaste' onClick={handlePaste}>paste</button>
                </div>    
                <button className='btnRequest' onClick={handleRequestConvo}>Request Convo</button>
            </div>
        </div>
    )
}

export default RequestConvo;
