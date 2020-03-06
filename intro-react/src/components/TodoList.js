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
                        toggleDone={props.toggleDone}
                        removeTodo={props.removeTodo}
                        index={index}
                    />
                );
            })}
        </ul>
    )
}

export default TodoList;