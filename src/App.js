import React from "react";
import HeaderPage from "./pages/Header";
import MainPage from "./pages/Main";
import Page2 from "./pages/Page2";
import Skill from "./pages/Skill";
import "./styles/App.css";
import "./styles/SassComponent.scss";
import styles from "./styles/common.module.scss";

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <section className="main-wrapper">
        <MainPage />
      </section>
      <section className="page-wrapper">
        <Page2 />
      </section>
      <section className="page-wrapper">
        <Skill />
      </section>
    </div>
  );
}

export default App;
