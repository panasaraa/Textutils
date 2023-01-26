import React, { useState } from 'react';

export default function TextForm(props) {

const handleUpClick = () => {
    // console.log("upercase was clicked", + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to upercase!", "danger")
}


const handlelowerClick = () => {
    // console.log("upercase was clicked", + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convert to lowercase!", "danger")
}

const handleclearClick = () => {
    // console.log("upercase was clicked", + text);
    let newText = ' ';
    setText(newText)
    props.showAlert("Convert to clearText!", "danger")
}


const handlecopyText = async () => {
    // console.log("upercase was clicked", + text);
    await navigator.clipboard.writeText(text);
    props.showAlert("copyText!", "danger")
}


const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Convert to Remove Extra Space!", "danger")
}

const handleonChange = (event) => {
    // console.log("onChange");
    setText(event.target.value)
}


const [text, setText] = useState(' ');

return (
    <>
    
        <div>
            <div className="container" style={{color: props.mode==='dark'?"white":'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#042743'
                    }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-info mx-3 my-1" onClick={handleUpClick}>Convert To UperCase</button>
                <button className="btn btn-danger mx-3 my-1" onClick={handlelowerClick}>Convert To lowerCase</button>
                <button className="btn btn-success mx-3 my-1" onClick={handleclearClick}>clear Text</button>
                <button className="btn btn-secondary mx-3 my-1" onClick={handlecopyText}>copy Text </button>
                <button className="btn btn-dark mx-3 my-1" onClick={handleExtraspaces}>Remove Extra Space</button>


            </div>
        </div>
        <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>Your text sumary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
            <h2>perweview</h2>
            <p>{text.length > 0 ? text : "Enter somthing to previewit here"}</p>
        </div>
    </>
);
}
