import React, {useState} from 'react'
export default function TextFrom(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handlelOWClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleOnChnage= (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text Here2');
    
  return (
      <>
      <div className='container'>
          <h1> {props.heading}</h1>
            <div className="mb-3">
               
                <textarea className="form-control" value ={text} onChange={handleOnChnage} id="myBox" rows="12"></textarea>
            </div>
             <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper case</button>
             <button className="btn btn-primary mx-2" onClick={handlelOWClick}>Convert To Lower case</button>
        </div>
        <div className="container">
        <h1> Your Text Summary .</h1>
        <p> {text.split(" ").length} Words and {text.length} Characters</p>
        <p> {0.008 * text.split(" ").length}</p>
        <h2>Privew</h2>

        <p>{text}</p>

        </div>
    </>
   
  )
}
