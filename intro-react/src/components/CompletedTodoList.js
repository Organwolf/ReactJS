import React from 'react'
import CompletedTodoItem from './CompletedTodoItem'

const CompletedTodoList = (props) => {
    return (
        <div>
            <label>Finished Todos:</label>
            <ul>
                {props.completedTodos.map((todo, index) => {
                    return (
                        <CompletedTodoItem
                            key={'completed-' + index}
                            todo={todo}
                            editReview={"add logic for edit later"}
                        />
                    );
                })}
            </ul>
        </div>
    )
}

export default CompletedTodoList;