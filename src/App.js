import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './containers/customer/Home';
import Admin from './containers/admin/Admin';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">Welcome to React</h1>
            <div id="main-menu">
              <Link to="/">
                <button>home</button>
              </Link>
              <Link to="/admin">
                <button>admin</button>
              </Link>
            </div>
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
