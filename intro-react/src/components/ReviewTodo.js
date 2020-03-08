import React from 'react'

const ReviewTodo = (props) => {
    return (
        <textarea
            className={props.done ? '' : 'hide'}
            onChange={(event) => props.newReviewChanged(event.target.value)}
        />
    );

}

export default ReviewTodo