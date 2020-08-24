import React, { Component } from "react";
// import { ButtonBack, ButtonNext } from "pure-react-carousel";
import Typed from "typed.js";

class Page2 extends Component {
  componentDidMount() {
    const options = {
      strings: ["Python", "Django", "Java", "Spring", "React", "JavaScript"],
      typeSpeed: 150,
      startDelay: 500,
      backSpeed: 100,
      backDelay: 1300,
      loop: true,
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
        <div className="container-fluid">
          <div className="page-2-content">
            <h4 className="page-2-h4">
              저는 &nbsp;
              <strong
                id="typed"
                style={{ whiteSpace: "pre" }}
                ref={(el) => {
                  this.el = el;
                }}
              ></strong>
              할 줄 아는 <strong></strong> 개발자입니다.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Page2;
