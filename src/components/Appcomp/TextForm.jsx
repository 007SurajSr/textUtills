import React, { useState } from 'react';
 export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    console.log("Clear_text was clicked: " + text);
    let newText = '';
    setText(newText);
  };
   const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
   const [text, setText] = useState('Enter text here');
   return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick} my-3 >Convert to Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleLoClick} my-3 >Convert to Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handleClearClick} my-3 >Clear Text</button>
   
    </div>
    <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split("").length} words and {text.length} characters </p>
        <p>{0.008*text.split("").length}Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}