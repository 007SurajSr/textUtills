/* eslint-disable jsx-a11y/anchor-is-valid */
//import logo from './logo.svg';
//import './App.css';
//import { Button } from './components/about';
//import { Header } from './components/header';

import About from "./components/Appcomp/About";
import Navbar from "./components/Appcomp/Navbar";
import TextForm from "./components/Appcomp/TextForm";

function App() {
  return (
    <div>
  
    {/*<Navbar title={3  } aboutText="About_TextUtils"/>*/}
   {/*  <Navbar/>   */}
   <Navbar title="TextUtil" aboutText="About"/>
     <div className="container my-3">
      <About/>
     {/* <TextForm heading="Enter text to analyze"/> */}
     </div>
     
    </div>
  );
}

export default App;
