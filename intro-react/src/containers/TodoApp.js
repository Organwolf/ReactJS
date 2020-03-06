import React, { Component } from 'react';
import NewTodoForm from '../components/NewTodoForm';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { actions } from '../store'

class TodoApp extends Component {
  constructor() {
    super();
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
        <h3>{this.props.message}</h3>
        <NewTodoForm
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.props.onNewTodoChanged}
          newTodo={this.props.newTodo}
        />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todos={this.props.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
        newTodo: state.newTodo,
        todos: state.todos
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewTodoChanged(newTodo) {
            dispatch(actions.newTodoChanged(newTodo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
