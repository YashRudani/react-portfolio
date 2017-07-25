import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
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
      menu = <ul>
               {projectList}
               {infoList}
             </ul>
    } else {
      menu = '';
    }

    return(
      <header>
        <nav>
          <div className="nav-wrapper">
            <div id="menu-btn">
              <a onClick = {this.toggleMenu} className="hide-on-large-only btn-flat center-align"><i className="material-icons">menu</i></a>
            </div>
            <Link to='/about' className="brand-logo center">Kieran Davis<div>Technologist</div></Link>
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
          transitionLeaveTimeout={500}
          >
          {menu}
        </CSSTransitionGroup>
      </header>
    );
  }
}
