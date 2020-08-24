import React from "react";
import "./App.css";
import "./css/SassComponent.scss";

function App() {
  return (
    <div className="App">
      <div className="container bg">테스트</div>
      <div className="SassComponent">
        <div className="box red" />
        <div className="box orange" />
        <div className="box yellow" />
        <div className="box green" />
        <div className="box blue" />
        <div className="box indigo" />
        <div className="box violet" />
      </div>
    </div>
  );
}

export default App;
