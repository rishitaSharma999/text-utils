import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <>
        <Navbar title="Text-Utils" aboutText="About-TextUtils" mode={mode} toggleMode={toggleMode} toggleAbout={toggleAbout} />
        <Alert alert={alert} />
        <div className="container my-3">
              
            
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
                toggleMode={toggleMode}
              />
            
        </div>
    </>
  );
}

export default App;
