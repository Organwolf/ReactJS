import React from 'react'
import ReviewTodo from './ReviewTodo';

const TodoItem = (props) => {
    const { todo, index, newReviewChanged } = props;
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
                newReviewChanged={newReviewChanged}
            />
            {todo.done ?
                <button
                    onClick={() => props.saveTodo()}>
                    Done
                </button> :

                <button
                    onClick={() => props.removeTodo(index)}>
                    Remove
                </button>
            }
        </li >
    )
}

export default TodoItem;