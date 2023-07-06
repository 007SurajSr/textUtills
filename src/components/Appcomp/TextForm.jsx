import React, { useState } from 'react';
 export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    console.log("Clear_text was clicked: " + text);
    let newText = '';
    setText(newText);
    props.showAlert("Clear text was clicked", "success");
  };
   const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);

  };
   const handleCopy =() => {
   // console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy text was clicked", "success");
   };
   const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove extra space was clicked", "success");
   }


   const [text, setText] = useState('Enter text here');
   return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick} my-3 >Convert to Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleLoClick} my-3 >Convert to Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handleClearClick} my-3 >Clear Text</button>
      <button className='btn btn-primary mx-2' onClick={handleCopy} my-3 >Copy Text </button>
      <button className='btn btn-primary mx-2' onClick={handleExtraSpaces} my-3 >Remove Extra Spaces </button>
   
    </div>
    <div className='container true' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split("").length} words and {text.length} characters </p>

        <p>{text.trim().split(/\s+/).filter((word) => word !== "").length} Words and {text.length} letters</p>
        
        <p>{0.008*text.split("").length}Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}