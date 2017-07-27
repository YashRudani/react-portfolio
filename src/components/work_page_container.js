import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WorkHeader from './work_header';

import WorkDetails from './work_details';
import { railsProjects } from './data/rails-page';

export default class WorkPageContainer extends Component {
  componentWillUpdate(){
    let root = this.props.match.path;
    console.log(this.props.match);
  }
  render() {
    return (
      <div id="work-page">
        <WorkHeader details={this.props.pageInfo} />
        <hr />
        <Route path='/rails/znc' render={(props) => (
          <WorkDetails {...props} project={railsProjects.znc} name="znc" />
        )}/>
        <Route path='/rails/portfolio' render={(props) => (
          <WorkDetails {...props} project={railsProjects.portfolio} name="portfolio" />
        )}/>
        <Route path='/rails/ruby' render={(props) => (
          <WorkDetails {...props} project={railsProjects.ruby} name="ruby" />
        )}/>
      </div>

    );
  }
}
