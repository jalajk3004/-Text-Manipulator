import React, {useState} from 'react'

export default function TextForm(props) {
   
    const upperUpClick =()=>{
        console.log("Uppercase was cliced"+ text );
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    }
    const lowerUpClick =()=>{
        console.log("Uppercase was cliced"+ text );
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success")
    }
    const clearClick =()=>{
   
        let newText= "";
        setText(newText);
        props.showAlert("Text is cleared","success")

    }
    const CopyClic =()=>{
   
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied","success")
    }
    const extraspaces =()=>{
   
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed","success")

    }
    const handleOnChange =(event)=>{
        console.log("on change")
        setText(event.target.value)

    }
    const[text,setText]= useState("");
    
    return (
        <>
        <div className='Container' style={{color: props.mode==="dark"?"white":"#042743"}}> 
      
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"#042743" }} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={upperUpClick}>Convert to uppercase</button> 
            <button className="btn btn-primary mx-2" onClick={lowerUpClick}>Convert to lowercase</button> 
            <button className="btn btn-primary mx-2" onClick={clearClick}>Clear Text</button> 
            <button className="btn btn-primary mx-2" onClick={CopyClic}>Copy Text</button> 
            <button className="btn btn-primary mx-2" onClick={extraspaces}>Remove Extra Spaces</button> 
            
    
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}}>
            <h1>Text summary</h1>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 *text.split(" ").length } Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        </>
  )
}
