/* eslint-disable jsx-a11y/anchor-is-valid */
//import logo from './logo.svg';
//import './App.css';
//import { Button } from './components/about';
//import { Header } from './components/header';

import { useState } from "react";
//import About from "./components/Appcomp/About";
import Navbar from "./components/Appcomp/Navbar";
import TextForm from "./components/Appcomp/TextForm";
import React from 'react'

function App() {
  const [mode, setMode] = useState ('dark');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <div>
  
    {/*<Navbar title={3  } aboutText="About_TextUtils"/>*/}
   {/*  <Navbar/>   */}
   <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
     <div className="container my-3">
      
      <TextForm heading="Enter text to analyze" mode={mode}/>
     </div>
     
    </div>
  );
}

export default App;
