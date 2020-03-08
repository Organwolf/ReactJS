import React from 'react';

const NewTodoForm = (props) => {
    return (
        <form onSubmit={props.formSubmitted}>
            <p>
                <span>Add a todo:</span>
                <span>
                    <input onChange={(event) => props.newTodoChanged(event.target.value)} id="newTodo" name="newTodo" value={props.newTodo} />
                </span>
                <span>
                    <button className="button" type="submit">Add Todo</button>
                </span>
            </p>
        </form>
    )
}

export default NewTodoForm;