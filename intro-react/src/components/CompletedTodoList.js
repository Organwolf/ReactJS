import React from 'react'
import CompletedTodoItem from './CompletedTodoItem'

const CompletedTodoList = (props) => {
    return (
        <ul>
            {props.completedTodos.map((todo, index) => {
                return (
                    <CompletedTodoItem
                        key={index}
                        todo={todo}
                        editReview={"add logic for edit later"}
                    />
                );
            })}
        </ul>
    )
}

export default CompletedTodoList;