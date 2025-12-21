import React,{useState,useEffect} from 'react'

export default function Textform(props) {

    let [text, setText] = React.useState('');
    const handleUpClick=() => {
        console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","Success");
    }

    const handleOnChange=(event) => {   
        console.log("On change");
        console.log(text.length)
        setText(event.target.value);
    }
    let [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
      });
    
      useEffect(() => {
        if (props.mode === 'dark') {
          setMyStyle({
            color: 'white',
            backgroundColor: 'grey'
          });
        } else {
          setMyStyle({
            color: 'black',
            backgroundColor: 'white'
          });
        }
      }, [props.mode]);
    return (
        <>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{props.heading}</label>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1"  value={text} onChange={handleOnChange} rows="3" style={myStyle}></textarea>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.trim().length>0?text.split(" ").length:0} words and {text.length} characters</p>
                <p>{text.trim().length > 0 ? (0.008 * text.trim().split(/\s+/).length) : 0} Minutes read</p>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Change to Upper case</button>
        </>
    );
}