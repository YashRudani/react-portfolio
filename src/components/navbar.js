import React , {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return(
      <header>
        <nav>
          <div className="nav-wrapper">
            <Link to='/about' className="brand-logo">Kieran Davis</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>React.JS</li>
              <li>Ruby-on-Rails</li>
              <li>Manufacturing</li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
