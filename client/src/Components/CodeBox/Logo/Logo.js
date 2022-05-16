import React from 'react';
import './Logo.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMessage} from '@fortawesome/free-solid-svg-icons'

const Logo = () =>{
    return(
        <div className='logo'>
            <span className='txtLogo'>2Convo</span>
            <FontAwesomeIcon icon={faMessage} className='msgIcon'></FontAwesomeIcon>
        </div>
    );
}

export default Logo;

