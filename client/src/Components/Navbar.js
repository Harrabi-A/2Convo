import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMessage} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return(
        <div className='navbar'>
            <ul>
                <li><span className='txtLogo'>2Convo</span></li> 
                <li><FontAwesomeIcon icon={faMessage} className='msgIcon'></FontAwesomeIcon></li>
                
            </ul>
        </div>  
    )
}

export default Navbar;
