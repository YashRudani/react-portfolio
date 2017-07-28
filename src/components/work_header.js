import _ from 'lodash';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ReactPage extends Component {

  renderButtons(){
    const root = this.props.details.rootPath
    const buttonInfo = this.props.details.buttons;
    return _.map(buttonInfo, btn => {
      return (
        <NavLink
          to={`/${root}/${btn.path}`}
          activeClassName="active-btn"
          key={btn.name}
          className="btn-flat">
          {btn.name}
        </NavLink>
      );
    });
  }

  render() {
    const { details } = this.props;
    return (
      <section id="work-header">
        <h3>{details.title}</h3>
        <h6>{details.subtitle}</h6>
        <h5>Browse My Projects:</h5>
        <div className="row">
          {this.renderButtons()}
        </div>
      </section>
    );
  }
}
