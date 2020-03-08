import React from 'react'
import ReviewTodo from './ReviewTodo';

const TodoItem = (props) => {
    const { todo, index } = props;
    return (
        <li>
            <input
                onChange={(event) => props.toggleTodoDone(event, index)}
                type="checkbox"
                checked={todo.done}
            />
            <span
                className={todo.done ? 'done' : ''}>{todo.title}
            </span>
            <ReviewTodo
                done={todo.done}
            />
            <button
                onClick={() => props.removeTodo(index)}>
                {todo.done ? 'Done' : 'Remove'}
            </button>
        </li>
    )
}

export default TodoItem;