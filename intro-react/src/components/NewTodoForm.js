import React from 'react';
import { Button } from 'react-bootstrap'

const NewTodoForm = (props) => {
    return (
        <form onSubmit={props.formSubmitted}>
            <p>
                <span>Add a todo:</span>
                <span>
                    <input onChange={(event) => props.newTodoChanged(event.target.value)} id="newTodo" name="newTodo" value={props.newTodo} />
                </span>
                <span>
                    <Button
                        type="submit"
                        variant="dark"
                    >Add Todo</Button>
                </span>
            </p>
        </form>
    )
}

export default NewTodoForm;