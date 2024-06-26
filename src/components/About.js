import React, { useState } from "react";

export default function About(props) {
   
     {
      /*
      const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
 
  const [btnText,setBtnText]=useState("Enable Dark Mode")
  const toggleStyle=()=>{
    if(myStyle.color==='white'){
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setBtnText("Enable Dark Mode")
    }
    else{
        setMyStyle({
            color:'white',
            backgroundColor:'black',
            border: '1px solid white'
        })
        setBtnText("Enable Light Mode")
    }
  }
   */
     }
    
     let myStyle={
      color: props.mode==='dark'?'white':'#121212',
      backgroundColor: props.mode==='dark'?'#121212':'white',
      border: '1px solid',
      borderColor: props.mode==='dark'?'white':'#121212'
     }

     let bodyStyle={
      color: props.mode==='dark'?'white':'rgb(39 38 38)',
      backgroundColor: props.mode==='dark'?'rgb(39 38 38)':'white',
      border: '1px solid',
      borderColor: props.mode==='dark'?'white':'rgb(39 38 38)'
     }
  
  
  return (
    <>
      <div className="container" style={myStyle}>
        <h2 className="my-3"> About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={bodyStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>
                Analyse your texts
                </strong>
               
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={bodyStyle}>
              This text utils app offers a simple and efficient way to analyze your text by converting it to different cases, making it easier to read and understand.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={bodyStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>
                Free to use
                </strong>
                
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={bodyStyle}>
              The app is completely free, allowing you to convert as much text as you need without any hidden fees or charges.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={bodyStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>
                Browser compatible
                </strong>
                
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={bodyStyle}>
              This web-based tool is compatible with all modern browsers, making it accessible and convenient to use on any device.
              </div>
            </div>
          </div>
        </div>
        {
          /*
          <div className="container my-3">
          <button type="button" onClick ={toggleStyle} className="btn btn-primary ">
            {btnText}
          </button>
        </div>
         */
        }
        
      </div>
    </>
  );
}
