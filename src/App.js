import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import { reactPage } from './components/data/react-page';
import { railsPage } from './components/data/rails-page';
import { usabilityPage } from './components/data/usability-page';
import { manufacturingPage } from './components/data/manufacturing-page';
import WorkPageContainer from './components/work_page_container';

import './assets/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/react' render={(props) => (
                <Redirect to="/react/portfolio" />
              )}/>
              <Route path='/react' render={(props) => (
                <WorkPageContainer {...props} pageInfo={reactPage} />
              )}/>
              <Route exact path='/rails' render={(props) => (
                <Redirect to="/rails/znc" />
              )}/>
              <Route path='/rails' render={(props) => (
                <WorkPageContainer {...props} pageInfo={railsPage} />
              )}/>
              <Route exact path='/usability' render={(props) => (
                <Redirect to="/usability/laud_social" />
              )}/>
              <Route path='/usability' render={(props) => (
                <WorkPageContainer {...props} pageInfo={usabilityPage} />
              )}/>
              <Route exact path='/manufacturing' render={(props) => (
                <Redirect to="/manufacturing/python" />
              )}/>
              <Route path='/manufacturing' render={(props) => (
                <WorkPageContainer {...props} pageInfo={manufacturingPage} />
              )}/>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
