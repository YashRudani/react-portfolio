import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
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
              <Route path='/react' render={(props) => (
                <WorkPageContainer {...props} pageInfo={reactPage} />
              )}/>
              <Route path='/rails' render={(props) => (
                <WorkPageContainer {...props} pageInfo={railsPage} />
              )}/>
              <Route path='/rails/znc' component={Znc} />
              <Route path='/rails/portfolio' component={RailsPortfolio} />
              <Route path='/rails/ruby' component={Ruby} />
              <Route path='/usability' render={(props) => (
                <WorkPageContainer {...props} pageInfo={usabilityPage} />
              )}/>
              <Route path='/manufacturing' render={(props) => (
                <WorkPageContainer {...props} pageInfo={manufacturingPage} />
              )}/>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
