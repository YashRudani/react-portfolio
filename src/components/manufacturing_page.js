import React, { Component } from 'react';
import WorkHeader from './work_header';
import { manufacturingHeader } from './data/manufacturing-header';

export default class ManufacturingPage extends Component {
  render() {
    return (
      <section id="manufacturing-page">
        <WorkHeader details={manufacturingHeader} />
      </section>
    );
  }
}
