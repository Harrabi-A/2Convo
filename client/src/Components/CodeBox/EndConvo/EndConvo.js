import React, { useState } from 'react';
import './EndConvo.css';

import {useDispatch, useSelector} from "react-redux"
import {bindActionCreators} from "redux"
import { actionCreators } from '../../../State/index';


const EndConvo = () =>{
    const dispatch = useDispatch();
    const {setConvoState, unsetConvoState} = bindActionCreators(actionCreators, dispatch);
    const {setWaiting,unsetWaiting} = bindActionCreators(actionCreators, dispatch)

    const waitingState = useSelector((state) => state.waitingState)
    const convoState = useSelector((state) => state.convoState)
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
        }
        if(convoState){
            unsetConvoState()
        }
    }

    return(
        <div className='endConvo'>
            {convoState || waitingState ? <button className='btnClose' onClick={handleClick}>{btnText}</button>:<></>}
        </div>
    )
}

export default EndConvo;
