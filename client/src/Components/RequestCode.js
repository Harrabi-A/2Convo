import React from 'react'
import Text from './Text';

function RequestCode () {
    return(
        <div className='RequestCode' style={{display:'flex', alignItems:'center', justifyContent: 'space-around'}}>
            <button className='btnRequestCode' onClick={getCode()}>Request Code</button>
            <Text text='(Press the button to get code [available for 24 hr])'></Text>
        </div>
    )
} 

function getCode(){
    fetch("http://127.0.0.1:8080/getcode")
}

export default RequestCode;