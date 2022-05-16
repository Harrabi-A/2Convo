import React from 'react';
import './CodeBox.css'
import Logo from './Logo/Logo';
import Code from './Code/Code';
import RequestConvo from './RequestConvo/RequestConvo'
import EndConvo from './EndConvo/EndConvo'

const CodeBox = () => {
    return(
        <div className='codeBox'>
            <Logo />
            <Code />
            <RequestConvo />
            <EndConvo />
        </div>
    );
}

export default CodeBox;