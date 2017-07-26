import React, { Component } from 'react';
import WorkHeader from './work_header';

export default class WorkPageContainer extends Component {
  render() {
    return (
      <div id="usability-page">
        <WorkHeader details={this.props.pageInfo} />
      </div>
    );
  }
}
