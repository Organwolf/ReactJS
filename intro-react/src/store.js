import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE';
const REMOVE_TODO = 'REMOVE_TODO';
const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS'

const initialState = {
  message: 'TODO!',
  newTodo: '',
  todos: [{
    title: 'Learning React',
    done: false
  }, {
    title: 'Learn JSX',
    done: true
  }],
  completedTodos: [{
    title: 'Add Redux',
    review: 'It wasn´t easy but onece done it did boost my self-confidence'
  }]
};

export const actions = {
  newTodoChanged(newTodo) {
    return {
      type: NEW_TODO_CHANGED,
      newTodo
    };
  },
  addTodo(todo) {
    return {
      type: ADD_TODO,
      todo
    };
  },
  toggleTodoDone(toggle) {
    return {
      type: TOGGLE_TODO_DONE,
      toggle
    }
  },
  removeTodo(index) {
    return {
      type: REMOVE_TODO,
      index
    }
  },
  allDone() {
    return {
      type: COMPLETE_ALL_TODOS
    }
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
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    }
    case TOGGLE_TODO_DONE: {
      const todos = [...state.todos]; // copy the array
      todos[action.toggle.index] = {
        ...todos[action.toggle.index],
        done: action.toggle.checked
      };
      return {
        ...state,
        todos
      };
    }
    case REMOVE_TODO: {
      const todos = [...state.todos]; // copy the array
      todos.splice(action.index, 1);
      return {
        ...state,
        todos
      }
    }
    case COMPLETE_ALL_TODOS: {
      const todos = state.todos.map(todo => {
        return {
          title: todo.title,
          done: true
        };
      });
      return {
        ...state,
        todos
      }
    }
    default:
      return state;
  }
}

export const store = createStore(reducer, composeWithDevTools());
