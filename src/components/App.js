import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Title from './Title'
import Breadcrumb from './Breadcrumb'
import routes from '../router-config'

class App extends Component {
  showRouter = (routes) => {
    let xhtml = null;
    if (routes.length) {
      xhtml = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        )
      })
    }
    return <Switch>{xhtml}</Switch>
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Title />
          <Breadcrumb />
          {this.showRouter(routes)}
        </div>
      </Router>
    );
  }
}

export default App;
