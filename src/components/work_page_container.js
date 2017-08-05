import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import WorkHeader from './work_header';
import WorkDetails from './work_details';
import WorkDetailsPatents from './work_details_patents';

import { railsProjects } from './data/rails-page';
import { usabilityProjects } from './data/usability-page';
import { reactProjects } from './data/react-page';
import { manufacturingProjects } from './data/manufacturing-page';

export default class WorkPageContainer extends Component {
  render() {
    const { location } = this.props
    return (
      <div id="work-page">
        <WorkHeader details={this.props.pageInfo} />
        <hr />
        <CSSTransitionGroup
          transitionName="work-details"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={250}
          >
          <Switch key={location.key} location={location}>
            <Route path='/rails/znc' render={(props) => (
              <WorkDetails {...props} project={railsProjects.znc} name="znc" />
            )}/>
            <Route path='/rails/portfolio' render={(props) => (
              <WorkDetails {...props} project={railsProjects.portfolio} name="portfolio" />
            )}/>
            <Route path='/rails/ruby' render={(props) => (
              <WorkDetails {...props} project={railsProjects.ruby} name="ruby" />
            )}/>
            <Route path='/react/gifs' render={(props) => (
              <WorkDetails {...props} project={reactProjects.gifs} name="gifs" />
            )}/>
            <Route path='/react/portfolio' render={(props) => (
              <WorkDetails {...props} project={reactProjects.portfolio} name="portfolio" />
            )}/>
            <Route path='/usability/registrar' render={(props) => (
              <WorkDetails {...props} project={usabilityProjects.registrar} name="registrar" />
            )}/>
            <Route path='/usability/laud_social' render={(props) => (
              <WorkDetails {...props} project={usabilityProjects.laudSocial} name="laud_social" />
            )}/>
            <Route path='/manufacturing/python' location={location}  key={8} render={(props) => (
              <WorkDetails {...props} project={manufacturingProjects.python} name="python" />
            )}/>
            <Route path='/manufacturing/composites' render={(props) => (
              <WorkDetails {...props} project={manufacturingProjects.composites} name="composites" />
            )}/>
            <Route path='/manufacturing/patents' render={(props) => (
              <WorkDetailsPatents {...props} project={manufacturingProjects.patents} name="patents" />
            )}/>
          </Switch>
        </CSSTransitionGroup>
      </div>

    );
  }
}
