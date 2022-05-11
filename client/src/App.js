import React from 'react';
import Navbar from './Components/Navbar';
import RequestCode from './Components/RequestCode';
import RequestConvo from './Components/RequestConvo'
import ChatBox from './Components/ChatBox'
import Text from './Components/Text'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMessage} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
        <div className="App">
        <Navbar></Navbar>    
        <RequestCode></RequestCode>
        <RequestConvo></RequestConvo>
        
        <Text text='ChatBox'></Text>
        <FontAwesomeIcon icon={faMessage} className='msgIcon'></FontAwesomeIcon>    

        <ChatBox></ChatBox>
        </div> 

        
    </>
  );
}

export default App;
