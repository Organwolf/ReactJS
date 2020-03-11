import React, { Component } from 'react';
import TodoApp from './containers/TodoApp';

// https://react-bootstrap.github.io/getting-started/introduction

class App extends Component {

  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}

export default App;
