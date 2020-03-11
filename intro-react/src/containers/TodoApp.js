import React, { Component, Fragment } from 'react';
import NewTodoForm from '../components/NewTodoForm';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { actions } from '../store'
import CompletedTodoList from '../components/CompletedTodoList'

class TodoApp extends Component {

  formSubmitted(event) {
    event.preventDefault();

    this.props.onAddTodo({
      title: this.props.newTodo,
      done: false
    });

    this.props.onNewTodoChanged('');
  }

  saveSubmitted(index) {
    console.log("saving a review")
    console.log(this.props.todos[index])
    console.log(this.props.newReview)
    this.props.onSaveTodo({
      title: this.props.todos[index].title,
      review: this.props.newReview,
      done: true
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
      <Fragment>
        <div className="welcomeMessage">
          <h3>{this.props.message}</h3>
        </div>
        <div className="container">
          <NewTodoForm
            formSubmitted={this.formSubmitted.bind(this)}
            newTodoChanged={this.props.onNewTodoChanged}
            newTodo={this.props.newTodo}
          />
        </div>

        <hr className=""></hr>

        <div className="container">
          <TodoList
            todos={this.props.todos}
            toggleTodoDone={this.toggleTodoDone.bind(this)}
            removeTodo={this.props.onRemoveTodo}
            newReviewChanged={this.props.onReviewChanged}
            saveTodo={this.saveSubmitted.bind(this)}
          />
        </div>

        <hr className=""></hr>

        <div className="container">
          <CompletedTodoList
            completedTodos={this.props.completedTodos}
          />
        </div>
      </Fragment>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    message: state.message,
    newTodo: state.newTodo,
    newReview: state.newReview,
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
