import React , {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import githubIcon from '../assets/img/icons/Github.svg'
import linkedinIcon from '../assets/img/icons/Linkedin.svg'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    if (!this.state.menuState) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if ((this.node.contains(e.target)) || !this.state.menuActive) {
      return;
    }

    this.toggleMenu();
  }

  render() {
    let projectList = <div>
                        <li><NavLink to="/react" activeClassName="active-nav">React.JS</NavLink></li>
                        <li><NavLink to="/rails" activeClassName="active-nav">Ruby on Rails</NavLink></li>
                        <li><NavLink to="/manufacturing" activeClassName="active-nav">Composites Manufacturing</NavLink></li>
                        <li><NavLink to="/usability" activeClassName="active-nav">Usability</NavLink></li>
                      </div>
    let infoList = <ul className='right'>
                     <li><NavLink exact to="/" activeClassName="active-nav"><i className="material-icons md-36">home</i></NavLink></li>
                     <li>
                       <a href="https://github.com/davisk4rpi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="">
                         <img src={githubIcon} alt="GitHub" className="social-media" />
                       </a>
                     </li>
                     <li>
                       <a href="https://www.linkedin.com/in/kieran-davis/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="">
                        <img src={linkedinIcon} alt="LinkedIn" className="social-media"/>
                       </a>
                     </li>
                   </ul>

    let menu;
    if(this.state.menuActive) {
      menu = <div className="dropdown-menu flow-text">
               <ul>
                 {projectList}
               </ul>
              </div>
    } else {
      menu = '';
    }

    return(
      <header id="header">
        <nav ref={node => { this.node = node; }}>
          <div className="nav-wrapper">
            <div id="menu-btn">
              <button onClick = {this.toggleMenu} className="hide-on-large-only btn-flat center-align">
                <i className="material-icons">menu</i>
              </button>
            </div>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              {projectList}
            </ul>
            {infoList}
          </div>
        </nav>
        <CSSTransitionGroup
          transitionName="menu"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={250}
          >
          {menu}
        </CSSTransitionGroup>
      </header>
    );
  }
}

export default withRouter(Navbar);
