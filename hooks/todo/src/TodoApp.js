import React from 'react'

function TodoApp() {
    return (
        <div>
            <p>welcome</p>
            <form onSubmit={() => console.log("add hook logic")}>
            <input type="text" placeholder="add todo" />
            <input type="submit" value="add todo" />
            </form>
            {/* add an ul and read todos from the state using hooks? */}
        </div>
    )
} 

export default TodoApp