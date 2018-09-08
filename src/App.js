import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './containers/customer/Home';
import Admin from './containers/admin/Admin';
import Company from './containers/admin/Company';

import 'semantic-ui-css/semantic.min.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <header>
            <h1>Vertaa taksit</h1>
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/newcompany" component={Company} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
