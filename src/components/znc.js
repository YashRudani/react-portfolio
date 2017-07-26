import React, { Component } from 'react';
import zncLogo from '../assets/img/work/znc-logo.png';
import zncSite from '../assets/img/work/znc-website.png';

export default class Znc extends Component {
  render() {
    return (
      <section id="znc">
        <h5>Zuzek & Company (ZNC) Website</h5>
        <a  href="http://www.zuzekandco.com/"
            target="_blank"
            rel="noopener noreferrer">
          http://www.zuzekandco.com/
        </a>
        <div className="row">
          <div className="col s8 offset-s2 m4">
            <img src={zncLogo} alt="ZNC-Logo" className="work-img"/>
          </div>
          <div className="col s12 m8">
            <h6>Introduction</h6>
            <p>
              In February 2017 I was contacted by the founders of Zuzek & Company
              and asked to build them a website. Since then I have built them a
              company website from the ground up. I took on the role of Lead
              Developer and Product Manager and continue to support this project.
              As the product owner, I have been involved any every step of the
              build process: Design, Content Writing, Back-End & Front-End
              Development, Testing, and Project Management.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s8 offset-s2 m4">
            <img src={zncSite} alt="ZNC-Website" className="work-img"/>
          </div>
          <div className="col s12 m8">
            <h6>Technology Used for this Project</h6>
            <p>
              In February 2017 I was contacted by the founders of Zuzek & Company
              and asked to build them a website. Since then I have built them a
              company website from the ground up. I took on the role of Lead
              Developer and Product Manager and continue to support this project.
              As the product owner, I have been involved any every step of the
              build process: Design, Content Writing, Back-End & Front-End
              Development, Testing, and Project Management.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
