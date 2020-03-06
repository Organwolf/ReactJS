import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'TODO!',
      newTodo: '',
      todos: [{
        title: 'Learning React',
        done: false
      }, {
        title: 'Learn JSX',
        done: false
      }, {
        title: 'Add Redux',
        done: false
      }]
    };
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    })
  }

  toggleTodoDone(event, index) {
    console.log(event.target.checked);
    const todos = [...this.state.todos]; // copy the array
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    }; // copy the array
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; // copy the array
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <NewTodoForm
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)}
          newTodo={this.state.newTodo}
        />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
