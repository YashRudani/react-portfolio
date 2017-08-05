import React , {Component} from 'react';
import githubIcon from '../assets/img/icons/Github.svg'
import linkedinIcon from '../assets/img/icons/Linkedin.svg'

export default class Footer extends Component {
  render() {
    return(
      <footer id="footer" className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col s12 center-align">
              <h5>Kieran Davis</h5>
              <p>Product Management<br />Front-End Development<br />Full-Stack Development</p>
              <a href="mailto:davisk4rpi@gmail.com"><h6>davisk4rpi@gmail.com</h6></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container center-align">
            <ul>
              <li>
                <a href="https://github.com/davisk4rpi"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="">
                  <img src={githubIcon} alt="GitHub" className="social-media hoverable" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kieran-davis/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="">
                 <img src={linkedinIcon} alt="LinkedIn" className="social-media hoverable"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
