import React from "react";
import classNames from "classnames/bind";
import styles from "./styles/Main.module.scss";

const cx = classNames.bind(styles); // 미리 styles 에서 클래스를 받아오도록 설정하고
const CSSModule = () => {
  return (
    <div className="container bg">
      <div className={cx("wrapper", "inverted")}>
        5년차 개발자
        <br />
        <strong>성기동</strong>의
        <br />
        <span className="something">포트폴리오</span> 입니다.
      </div>
    </div>
  );
};

export default CSSModule;
