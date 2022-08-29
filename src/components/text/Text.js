import React, {useState} from "react";
import "./Text.css";

const Text = () => {

  const [text, setText] = useState("");

  const handleUpcase = () => {
    setText(text.toUpperCase());
  }
  
  const handleLowcase = () => {
    setText(text.toLowerCase());
  }

  const handleRemove = () => {
    setText('')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }



  return (
    <>
      <div className="text">
        <div className="container-fluid">
          <h2>Write Your Text</h2>

          <div className="mb-3 mt-3">
            <textarea
              placeholder="Write Your Details Here..."
              value={text}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="12"
              style={{width:'780px',transform:'translateX(250px)'}}
              onChange={handleOnChange}
            ></textarea>
          </div>

          <button type="button" className="btn btn-primary"
          onClick={handleUpcase}
          >Uppercase</button>
          
          <button type="button" className="btn btn-success ms-2"
          onClick={handleLowcase}
          >Lowercase</button>
          
          <button type="button" className="btn btn-danger ms-2"
           onClick={handleRemove}
          >Clear Text</button>
          
          <button type="button" className="btn btn-warning ms-2"
          onClick={handleCopy}
          >Copy to Clipboard</button>
          
          <button type="button" className="btn btn-info ms-2"
          onClick={handleSpace}
          >Remove Extra Space</button>

        <div className="container mt-3">
          <div className="t-text">
          <h2>Preview Here</h2>
          <p>Words: {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
          <p> Characteras: {text.length}</p>
          <p>Times: {0.008 * text.split("").length} Minutes</p>
          </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default Text;
