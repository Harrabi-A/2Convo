import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import RequestCode from './Components/RequestCode';
import RequestConvo from './Components/RequestConvo'

function App() {
  return (
    <>
    <div className="App">
     <Navbar></Navbar>    
    </div>
    
    <RequestCode></RequestCode>
    <hr></hr>
    <RequestConvo></RequestConvo>
    </>
  );
}

export default App;
