import React, {useState} from 'react'
export default function TextFrom(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const onhashchange= (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text Here2');
    
  return (
      <div>
          <h1> {props.heading}</h1>
            <div className="mb-3">
               
                <textarea className="form-control" value ={text} onChange={onhashchange} id="myBox" rows="12"></textarea>
            </div>
             <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upper case</button>
        </div>
   
  )
}