import React,{useState} from 'react'
import PropTypes from "prop-types";

export default function TextForm(props) {
    const[text,setText] = useState('Enter Your text');
    const handleOnclick = () =>
    {
        console.log("you clicked uppercase");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoclick = () =>
    {
        console.log("you clicked lowercase");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclear = () =>
    {
        console.log("you clicked Clear text");
        let newText = "";
        setText(newText);
    }
    const handleOnchange = (event) =>
    {
        setText(event.target.value)
    }
  return (
    <>
<div className="mb-3"/>
<h1>{props.text}</h1>
  <textarea className="form-control" value = {text} onChange={handleOnchange} id="MyBox" rows="3"></textarea>
  
  <button className='btn btn-success mx-2 my-3' onClick={handleOnclick}>Convert to uppercase</button>
  <button className='btn btn-primary mx-2 my-3' onClick={handleLoclick}>Convert to lowerCase</button>
  <button className='btn btn-danger mx-2 my-3' onClick={handleclear}>Clear text</button>
  <div className="container my-3">
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 *  text.split(" ").length} Minutes to read </p>
    </div>
</>
  )
}
TextForm.propTypes = { text: PropTypes.string};