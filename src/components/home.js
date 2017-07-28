import React, { Component } from 'react';
import headshot from '../assets/img/headshot.png';

export default class Home extends Component {
  render() {
    return (
      <section id="home-page" className="flow-text">
        <div className="center-align">
          <h1 className="extra-bold">Kieran Davis</h1>
          <div className="skills">
            <div className="hide-on-med-and-down">
              Product Management, Front-End, & Full-Stack Development
            </div>
            <div className="hide-on-large-only">
              Product Management
            </div>
            <div className="hide-on-large-only">
              Front-End Development
            </div>
            <div className="hide-on-large-only">
              Full-Stack Development
            </div>
            <div>
              React | Rails | Sass | JS | Ruby | Python
            </div>
            <div>
              <a href="https://docs.google.com/document/d/1IiaVlx7UjyjHn_jQ7O5bgvkbSAmvZ6S6N1-NI0xZGR4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flat">
                Click here for Resume
              </a>
            </div>
          </div>
        </div>
        <div className="row flex-center">
          <div className="col s10 offset-s1 m8 offset-m2 l6">
            <img src={headshot} alt="Kieran's Headshot" id="headshot-img" className="responsive-img"/>
          </div>
          <div className="col s12 l6">
            <h2 className="center-align">Who Am I?</h2>
            <p>
              A highly technical and business-minded innovator with a hybrid background
              in aerospace manufacturing and web development. I am known for providing
              simple solutions to complex problems and elevating the performance of others.
              My projects have ranged from the building websites to designing
              3D printed equipment modifications to machining carbon fiber.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <p>
              I was formerly employed in a multi-functional role by Boeing Research &
              Technology. We designed and developed cutting edge manufacturing technology for
              composite materials. I am formally educated in Mechanical & Materials
              Engineering, Economics, and User-Centered Design. I am a self taught
              full-stack web developer. These have all contributed to my diverse
              skillset but I am still constantly expanding my repertoire.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h5>Send me a message</h5>
            <p>
              I am currently looking for a roles as
              a Full-Stack Web Developer, Front-End Developer, or Product Manager. I am also open to slight
              deviations from these roles. Please, explore my portfolio/resume and
              reach out if you think that I would be a good fit at your company.
              Alternatively, send me a message if you just want to talk about my work or
              yours. I am always interested in conversation about technology.
            </p>
            <h5>
              Contact
            </h5>
            <p>
              davisk4rpi@gmail.com
            </p>
          </div>
        </div>
      </section>
    );
  }
}
