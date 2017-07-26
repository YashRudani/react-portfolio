import React, { Component } from 'react';
import WorkHeader from './work_header';
import { reactHeader } from './data/react-header';

export default class ReactPage extends Component {
  render() {
    return (
      <div id="react-page">
        <WorkHeader details={reactHeader} />
      </div>
    );
  }
}
