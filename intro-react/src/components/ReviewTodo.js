import React from 'react'

const ReviewTodo = (props) => {
    return (
        <textarea
            className={props.done ? '' : 'hide'}
        />
    );

}

export default ReviewTodo