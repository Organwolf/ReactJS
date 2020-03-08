import React from 'react'

const CompletedTodoItem = (props) => {
    const { todo, review } = props;
    return (
        <li>
            <span>
                {todo.title}
            </span>
            <p>{review}</p>
            <button
                onClick={() => console.log("trying to edit")}>
                Edit
            </button>
        </li>
    )
}

export default CompletedTodoItem;