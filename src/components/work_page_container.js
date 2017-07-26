import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WorkHeader from './work_header';

import Znc from './znc';

export default class WorkPageContainer extends Component {
  render() {
    return (
      <div id="usability-page">
        <WorkHeader details={this.props.pageInfo} />
        <Route path='/rails/znc' component={Znc} />
      </div>

    );
  }
}
