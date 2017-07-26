import React, { Component } from 'react';
import WorkHeader from './work_header';
import { railsHeader } from './data/rails-header';

export default class RailsPage extends Component {
  render() {
    return (
      <section id="rails-page">
        <WorkHeader details={railsHeader} />
      </section>
    );
  }
}
