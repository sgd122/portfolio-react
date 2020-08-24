import React from "react";
import HeaderPage from "./pages/Header";
import MainPage from "./pages/Main";
import Page2 from "./pages/Page2";
import "./styles/App.css";
import "./styles/SassComponent.scss";
import styles from "./styles/common.module.scss";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <MainPage />
      <Page2 />
    </div>
  );
}

export default App;
