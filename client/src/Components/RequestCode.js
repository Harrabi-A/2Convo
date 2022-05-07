import React, { useState } from 'react'
import Text from './Text';

const RequestCode = () => {
    const [code, setCode] = useState('');
/*
    const GetCode = () => {
        fetch("http://127.0.0.1:8080/getcode")
        .then(res => {code= res.text()})
    }
*/
    const handleGetCode = () => {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
        // update the state of the component with the result here
        console.log(xhr.responseText)
        setCode(xhr.responseText)
        })

        // open the request with the verb and the url
        xhr.open('GET', 'http://127.0.0.1:8080/getcode')
        // send the request
        xhr.send()
    }
    
    return(
        <div className='RequestCode' style={{display:'flex', alignItems:'center', justifyContent: 'space-around'}}>
            <ul>
                <li><button className='btnRequestCode' onClick={handleGetCode}>Request Code</button></li>
                <li><Text text={code}></Text></li>
                <li></li>
                
            </ul>
            <span>(Press the button to get code [available for 24 hr])</span>
        </div>
    )
} 


export default RequestCode;
