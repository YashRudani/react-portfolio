import React , {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

  renderProjectList() {
    return(
      <div>
        <li><Link to="/">React.JS</Link></li>
        <li><Link to="/">Ruby-on-Rails</Link></li>
        <li><Link to="/">Composites Manufacturing</Link></li>
      </div>
    );
  }

  renderInfoList() {
    return(
      <div>
        <li><a>LinkedIn</a></li>
        <li><Link to="/">GitHub</Link></li>
        <li><Link to="/">About Me</Link></li>
      </div>
    );
  }

  render() {
    return(
      <header>
        <nav>
          <div className="nav-wrapper">
            <Link to='/about' className="brand-logo center">Kieran Davis<div>Technologist</div></Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              {this.renderProjectList()}
            </ul>
            <ul className="right hide-on-med-and-down">
              {this.renderInfoList()}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
