import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./styles/Main.module.scss";
import Typed from "typed.js";

const cx = classNames.bind(styles); // 미리 styles 에서 클래스를 받아오도록 설정하고
class Main extends Component {
  componentDidMount() {
    const options = {
      strings: ["포트폴리오"],
      typeSpeed: 150,
      startDelay: 500,
      backSpeed: 100,
      backDelay: 1300,
      loop: false,
    };
    this.typed = new Typed(this.el, options);
  }
  // 메모리 누수 방지
  componentWillUnmount() {
    this.typed.destroy();
  }
  render() {
    return (
      <div className="page-2">
        <div className="container bg">
          <div className={cx("wrapper", "inverted")}>
            5년차 개발자
            <br />
            <strong>성기동</strong>의
            <br />
            <span className="something">
              <strong
                id="typed"
                style={{ whiteSpace: "pre" }}
                ref={(el) => {
                  this.el = el;
                }}
              ></strong>
            </span>{" "}
            입니다.
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
