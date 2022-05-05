import React from 'react';
import Text from './Text';

function RequestConvo() {
    return(
        <>
        <div className='RequestConvo' style={{display:'flex', alignItems:'center', justifyContent: 'space-around'}}>
            <Text className='txt' text='Enter Convo code:'></Text>
            <input className='txtRequestConvo' type='text'></input>
        </div>
        <button className='btnRequestConvo'>Request Convo</button>
        </>

    )
}

export default RequestConvo;