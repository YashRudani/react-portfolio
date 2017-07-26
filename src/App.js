import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ReactPage from './components/react_page';
import RailsPage from './components/rails_page';
import ManufacturingPage from './components/manufacturing_page';
import './assets/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/react" component={ReactPage} />
              <Route path="/rails" component={RailsPage} />
              <Route path="/manufacturing" component={ManufacturingPage} />
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
