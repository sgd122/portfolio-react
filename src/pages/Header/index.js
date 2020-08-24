import React from "react";
import classNames from "classnames/bind";
import styles from "./styles/Header.module.scss";
import MyPhoto from "../../img/SeongGiDong.png";

const cx = classNames.bind(styles); // 미리 styles 에서 클래스를 받아오도록 설정하고
const CSSModule = () => {
  return (
    <div className={cx("header")}>
      <img src={MyPhoto} className={cx("img")} />
    </div>
  );
};

export default CSSModule;
