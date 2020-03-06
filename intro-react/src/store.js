import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED';

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
  }
}

export function reducer(state = initialState, action) {
    switch (action.type) {
      case NEW_TODO_CHANGED: {
        return {
          ...state,
          newTodo: action.newTodo
        };
      }
      default:
          return state;
    }
}

export const store = createStore(reducer, composeWithDevTools());
