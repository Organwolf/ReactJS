import React from 'react'
import ReviewTodo from './ReviewTodo';
import { Button } from 'react-bootstrap'

const TodoItem = (props) => {
    const { todo, index, newReviewChanged } = props;
    return (
        <li className="todoItem">
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
                <Button
                    type="submit"
                    variant="dark"
                    onClick={() => props.saveTodo(index)}
                    >Done
                </Button>
                :
                <Button
                    type="submit"
                    variant="dark"
                    onClick={() => props.removeTodo(index)}
                    >Remove
                </Button>
            }
        </li>
    )
}

export default TodoItem;