import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import PopUp from "./components/PopUp";

function App() {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePop = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <div className="App-header">
        <NavBar />
      </div>
      <div className="content">
        <h3>The new way to happiness is through Otter!</h3>
        <h5>Be the first to know when we launch</h5>
        <div onClick={togglePop}>
          <br />
          <button className="btn ">Request an invite</button>
        </div>
        {popupVisible ? <PopUp toggle={togglePop} /> : null}
        <img className="image" src={require("./assets/Otter.png")} alt="" />
      </div>
      <footer className="App-footer"> </footer>
    </div>
  );
}

export default App;
