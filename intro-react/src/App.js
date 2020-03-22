import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import TodoApp from './containers/TodoApp';
import { About } from './components/About'
import { NoMatch } from './components/NoMatch'
import { Layout } from './components/Layout.js'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'


// https://www.youtube.com/watch?v=tOK9l5uP06U
// at 17 minutes

// https://github.com/MyNameIsURL/React-Bootstrap-Tutorial/tree/master/src

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={TodoApp} />
              <Route path="/About" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
