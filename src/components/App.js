import React, { Component } from 'react'
import {
  BrowserRouter as Router,Switch, Route
} from "react-router-dom";

import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import routes from './../router-config'

class App extends Component {
  showRoute = (routes) => {
    let xhtml = null;
    if (routes.length) {
      xhtml = routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main} />
        )
      })
    }
    return <Switch>{xhtml}</Switch>
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <div className="container">
            {this.showRoute(routes)}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
