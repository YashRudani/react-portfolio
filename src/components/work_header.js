import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ReactPage extends Component {

  renderButtons(){
    const buttonInfo = this.props.details.buttons;
    return _.map(buttonInfo, btn => {
      return (
        <Link to={btn.path} key={btn.name} className="btn-flat">{btn.name}</Link>
      );
    });
  }

  render() {
    const { details } = this.props;
    return (
      <section id="work-header">
        <h3>{details.title}</h3>
        <h6>{details.subtitle}</h6>
        <h5>Projects:</h5>
        <div className="row">
          {this.renderButtons()}
        </div>
      </section>
    );
  }
}
