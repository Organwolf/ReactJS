import React from 'react'

const CompletedTodoItem = (props) => {
    const { todo } = props;
    return (
        <li>
            <span>
                {todo.title}
            </span>

            <p>{todo.review}</p>
        </li>
    )
}

//     <button
//        onClick={() => console.log("trying to edit")}>
//        Edit / Save
//    </button>

export default CompletedTodoItem;