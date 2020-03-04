import React, {Component} from 'react';

// Review then componentise
// at 1:02:45 mins -> https://www.youtube.com/watch?v=vIA130MePY8&list=PLM_i0obccy3uGD0Ba0xiTBSAUlq7aZgdo&index=1
// need to change for commit

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello Coding Garden!',
      newTodo: '',
      todos: []
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
    todos[index] = {...todos[index]}; // copy the array
    todos[index].done = event.target.checked; // update done properly on copies array
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
        <form onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo} />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={() => this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <li key={todo.title}>
              <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" checked={todo.done}/> 
              <span className={todo.done ? 'done' : ''}>{todo.title}</span>
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
