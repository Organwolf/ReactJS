import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED';
const ADD_TODO = 'ADD_TODO';

const initialState = {
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

export const actions = {
  newTodoChanged(newTodo) {
    return {
      type: NEW_TODO_CHANGED,
      newTodo
    };
  },
  addTodo(todo){
    return {
      type: ADD_TODO,
      todo
    };
  },
}

export function reducer(state = initialState, action) {
    switch (action.type) {
      case NEW_TODO_CHANGED: {
        return {
          ...state,
          newTodo: action.newTodo
        };
      }
      case ADD_TODO: {
        return {
          ...state,
          todos: [...state.todos, action.todo]
        };
      }
      default:
          return state;
    }
}

export const store = createStore(reducer, composeWithDevTools());
