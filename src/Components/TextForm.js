import React, {useState} from 'react'
  
  export default function TextForm(props) {
    const handleUpClick =() =>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase!", "success"); // Alert show karne k liye props ka use kiya (jo App.js se aaya hai)
    }
    const handleLoClick =() =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick =() =>{
      let newText = "";
      setText(newText);
      props.showAlert("Text cleared!", "success");
    }
    const handleOnChange =(event) =>{
      // console.log("on change");
      setText(event.target.value);
      props.showAlert("Text changed!", "success");
    }
    
    const handleCopyClick =() =>{
    var text = document.getElementById("my-Box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
  }

  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  // const handleDarkMode =() =>{
      // ??????
  // }
   


    
    // useState (google se copy kiya syntax -> hooks react par jakr)
    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText("new text"); // Right way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        {/* <h1>{props.heading} - {text}</h1> */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
         {/* value k liye props ka use kiya({text}) */}
        <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="my-Box" rows="8"></textarea> 
        </div>
        <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>  
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>  
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>  
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>  
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>  
        {/* <button className="btn btn-primary mx-1" onClick={handleDarkMode}>Dark Mode</button>   */}
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>

    <div className="preview">
      <h2>Preview Text</h2>
      <textarea className="form-control" value= {text.length>0?text:" Enter something in the textbox above to preview it here"} onChange={handleOnChange} id="my-Box" rows="8"></textarea> 
      {/* <p>{text}</p> */}
    </div>
 
      
    </div>
    </>
  )
}
