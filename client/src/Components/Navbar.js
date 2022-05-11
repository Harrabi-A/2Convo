import React from 'react';


import RequestCode from './RequestCode';
import Code from './Code';


function Navbar() {
    return(
        <div className='navbar'>     
            <span className='txtLogo'>2Convo</span>
            <Code></Code>
            <button>copy</button>
        </div>  
    )
}

export default Navbar;
