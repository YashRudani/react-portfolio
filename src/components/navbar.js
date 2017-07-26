import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Navbar extends Component {
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
    if (this.node.contains(e.target)) {
      return;
    }

    this.toggleMenu();
  }

  render() {
    let projectList = <div>
                        <li><Link to="/">React.JS</Link></li>
                        <li><Link to="/">Ruby-on-Rails</Link></li>
                        <li><Link to="/">Composites Manufacturing</Link></li>
                      </div>
    let infoList = <div>
                     <li><a>LinkedIn</a></li>
                     <li><Link to="/">GitHub</Link></li>
                     <li><Link to="/">About Me</Link></li>
                   </div>

    let menu;
    if(this.state.menuActive) {
      menu = <div className="dropdown-menu flow-text">
               <ul>
                 {projectList}
                 {infoList}
               </ul>
              </div>
    } else {
      menu = '';
    }

    return(
      <header>
        <nav ref={node => { this.node = node; }}>
          <div className="nav-wrapper">
            <div id="menu-btn">
              <a onClick = {this.toggleMenu} className="hide-on-large-only btn-flat center-align">
                <i className="material-icons">menu</i>
              </a>
            </div>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              {projectList}
            </ul>
            <ul className="right hide-on-med-and-down">
              {infoList}
            </ul>
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
