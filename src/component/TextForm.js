import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");

  const handleCopy = async () => {
    await navigator?.clipboard?.writeText(text);
    props.showAlert("Text copy successfully", "success");
  };

  const handleOnClick = () => {
    let UpperCaseText = text.toUpperCase();
    setText(UpperCaseText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handlUpClcik = () => {
    let LowerCaseText = text.toLowerCase();
    setText(LowerCaseText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClick = (event) => {
    setText(event.target.value);
  };

  const resetEvent = () => {
    setText(" ");
    props.showAlert("Reset text successfully", "success");
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#212529" }}
      >
        <div className="contianer m-2">
          <h1>{props.heading}</h1>
        </div>
        <div className="container mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "dark",
            }}
            onChange={handleClick}
            id="textarea"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlUpClcik}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={resetEvent}>
          Reset Text
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>
          Copy Text
        </button>
        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
            words and {text.length} characters
          </p>
          <p>{0.008 * text.split("").length} Minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 1 ? text : "Enter text above to preview something"}
          </p>
        </div>
      </div>
    </>
  );
}
