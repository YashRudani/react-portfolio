import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <section id="home-page">
        <div className="center-align">
          <h1>Kieran Davis</h1>
          <div className="flow-text">
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
          </div>
        </div>
      </section>
    );
  }
}
