import React, { Component } from 'react';
import NewTodoForm from '../components/NewTodoForm';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { actions } from '../store'
import CompletedTodoList from '../components/CompletedTodoList';

class TodoApp extends Component {

  formSubmitted(event) {
    event.preventDefault();

    this.props.onAddTodo({
      title: this.props.newTodo,
      done: false
    });

    this.props.onNewTodoChanged('');
  }

  saveSubmitted() {
    console.log("save submitted")
    this.props.onSaveTodo({
      title: 'Important todo',
      review: 'It went well'
    });
  }

  toggleTodoDone(event, index) {
    this.props.onToggleTodoDone({
      index,
      checked: event.target.checked
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
        <button onClick={this.props.onCheckAllTodos}>All Done</button>
        <TodoList
          todos={this.props.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.props.onRemoveTodo}
          newReviewChanged={this.props.onReviewChanged}
          saveTodo={this.saveSubmitted.bind(this)}
        />
        <CompletedTodoList
          completedTodos={this.props.completedTodos}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    message: state.message,
    newTodo: state.newTodo,
    todos: state.todos,
    completedTodos: state.completedTodos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNewTodoChanged(newTodo) {
      dispatch(actions.newTodoChanged(newTodo))
    },
    onAddTodo(todo) {
      dispatch(actions.addTodo(todo))
    },
    onToggleTodoDone(toggle) {
      dispatch(actions.toggleTodoDone(toggle))
    },
    onRemoveTodo(index) {
      dispatch(actions.removeTodo(index))
    },
    onCheckAllTodos() {
      dispatch(actions.allDone())
    },
    onSaveTodo(todo) {
      dispatch(actions.saveTodo(todo))
    },
    onReviewChanged(newReview) {
      dispatch(actions.newReviewChanged(newReview))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
