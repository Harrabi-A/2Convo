import React, { useState } from 'react';
import './EndConvo.css';

import {useDispatch, useSelector} from "react-redux"
import {bindActionCreators} from "redux"
import { actionCreators } from '../../../State/index';
import { act } from 'react-dom/test-utils';


const EndConvo = () =>{
    const dispatch = useDispatch();
    const {setConvoState, unsetConvoState} = bindActionCreators(actionCreators, dispatch);
    const {setWaiting,unsetWaiting} = bindActionCreators(actionCreators, dispatch)
    const {deleteAllMessages} = bindActionCreators(actionCreators, dispatch)

    const waitingState = useSelector((state) => state.waitingState)
    const convoState = useSelector((state) => state.convoState)
    const socket = useSelector((value) => value.socket)
    var btnText;
    if(waitingState){
        btnText="Stop request"
    }
    if(convoState){
        btnText="End Convo"
    }
    
    const handleClick = () =>{
        if(waitingState){
            unsetWaiting()
            socket.emit("endWaiting")
        }
        if(convoState){
            unsetConvoState()
            deleteAllMessages()
            socket.emit("endConvo")
        }
    }

    return(
        <div className='endConvo'>
            {convoState || waitingState ? <button className='btnClose' onClick={handleClick}>{btnText}</button>:<></>}
        </div>
    )
}

export default EndConvo;
