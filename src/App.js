import React, { useState } from "react";
import Navbar from "./components/Appcomp/Navbar";
//import About from "./components/Appcomp/About";
import TextForm from "./components/Appcomp/TextForm";
import Alert from "./components/Appcomp/Alert";

 
 

 
function App() {
  const [mode, setMode] = useState ('light');
  const [alert, setAlert] =   useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message, 
      type: type 
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  setInterval(() => {
    document.title = 'TextUtil is amazing';
  }, 2000);
  setInterval(() => {
    document.title = 'Install TextUtil now';
  }, 2500);

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtil - Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtil - Light mode';
    }
  }
  const toggleMode1 = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='pink';
      showAlert("Pink mode has been enabled","success");
      document.title = 'TextUtil - Pink mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtil - Light mode';

    }
  }
  return (
    <div>

    {/*<Navbar title={3  } aboutText="About_TextUtils"/>*/}
   {/*  <Navbar/>   */}
   <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} />
     <div className="container true">
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
       
     </div>

    </div>

  
  );
  }
  export default App;