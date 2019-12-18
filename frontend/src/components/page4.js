import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

// 프로젝트 내역
class Page4 extends Component {
  render() {
    return (
      <div className="page-4">
        <ButtonBack className="to-top-project">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="title-wrapper">
            <h2 className="project-title">계명문화대학교 차세대 원서접수관리시스템, 입학관리시스템</h2>
            <h4 className="sub-title">계명문화대 원서접수 및 관리하는 시스템</h4>
          </div>
          <div className="content-wrapper row">
            <div className="col-md-6 video-wrapper">
              <div className="embed-responsive embed-responsive-16by9 media">
                <iframe title="project2" src="https://go.kmcu.ac.kr/" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="btn-wrapper">
                <div className="btn-group" role="group" aria-label="button group">
                  {/* <form action="https://github.com/realkth/mood" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-github" aria-hidden="true"></span>
                      &nbsp;Github
                  </button>
                  </form> */}
                  <form action="https://go.kmcu.ac.kr/" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-globe" aria-hidden="true"></span>
                      &nbsp;Web Site
                  </button>
                  </form>
                  {/* <form action="https://docs.google.com/spreadsheets/d/1i7tOWOv7eNiqQlEGzf7wO5ybKPk8lishXqrKqkRDrzU/edit?ts=59b76c7c#gid=0" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-pencil-square-o" aria-hidden="true"></span>
                      &nbsp;Daily Scrum
                  </button>
                  </form>
                  <form action="https://youtu.be/k8K98UBskyA" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-youtube-play" aria-hidden="true"></span>
                      &nbsp;Youtube
                  </button>
                  </form> */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="info">
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 개요</h5>
                  <p className="content-text-summary fa fa-angle-right" aria-hidden="true"> 학생들이 원서접수를 할 수있는 "원서접수 시스템"과 원서접수시 관리자 및 교수님들이 확인 후 합격/불합격 처리 후 최종 입학까지의 전반적인 모든 시스템을 구축하였습니다.
                    </p>
                </li>
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 주요 역할</h5>
                  <ul className="content-text-wil">
                    <li className="fa fa-check" aria-hidden="true"> Nexacro, Java와 Oracle를 활용한 작업</li><br />
                    <li className="fa fa-check" aria-hidden="true"> transaction을 이용한 데이터 통신</li><br />
                    <li className="fa fa-check" aria-hidden="true"> Oracle Procedure를 이용하여 전반적인 원서 및 입학관리시스템의 쿼리문 작성  </li><br />
                    <li className="fa fa-check" aria-hidden="true"> Svn, 구글 드라이브를 활용한 프로젝트 일정 관리 </li>
                  </ul>
                </li>
                <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 활용 기술</h5>
                <p className="content-text-stacks fa fa-angle-right" aria-hidden="true"> <code>Nexacro</code> <code>Java</code> <code>Oracle</code> <code>javascript</code>
                </p>
              </ul>
            </div>
          </div>
        </div>
        <ButtonNext className="to-bottom-project">
          <span className="fa fa-angle-double-down" aria-hidden="true"></span>
        </ButtonNext>
      </div>
    );
  }
}

export default Page4;
