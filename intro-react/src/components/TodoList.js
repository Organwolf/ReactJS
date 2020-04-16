import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map((todo, index) => {
                return (
                    <TodoItem
                        key={index}
                        todo={todo}
                        toggleTodoDone={props.toggleTodoDone}
                        removeTodo={props.removeTodo}
                        saveTodo={props.saveTodo}
                        newReviewChanged={props.newReviewChanged}
                        index={index}
                    />
                );
            })}
        </ul>
    )
}

export default TodoList;