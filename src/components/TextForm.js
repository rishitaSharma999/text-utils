import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text="new-text" {wrong way to vhange the state}
  // setText("new-text");
  const handleUpClick = () => {
    console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success")
  };
  const handleOnChange = (event) => {
    console.log("on-change");
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success")
  };
  const handleCapClick = () => {
    let newText = text
      .split(/\s+/)
      .filter((word) => word.length > 0)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalised Case", "success")

  };
  const handleSentClick = () => {
    let newText = text
      .split(/([.?!]\s*)/g) // Split by punctuation marks and keep them
      .filter((segment) => segment.length > 0)
      .map(
        (segment) =>
          segment.trim().charAt(0).toUpperCase() +
          segment.trim().slice(1).toLowerCase()
      )
      .join("");
    setText(newText);
    props.showAlert("Converted to Sentence Case", "success")
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text is Cleared", "success")
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is Copied", "success")
  };
  const handleExtraSpaces = () => {
    // Split the text by one or more spaces, and then join the resulting array with a single space
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra Spaces are removed", "success")
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#121212" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(39 38 38)" : "white",
              color: props.mode === "dark" ? "white" : "#121212",
            }}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          UPPER CASE
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowClick}
        >
          lower case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleCapClick}
        >
          Capitalised Case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleSentClick}
        >
          Sentence Case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#121212" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((word) => word.length > 0).length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {" "}
          {0.08 *
            text.split(/\s+/).filter((word) => word.length > 0).length}{" "}
          Minutes to read{" "}
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textBox above to preview it here"}
        </p>
      </div>
    </>
  );
}
