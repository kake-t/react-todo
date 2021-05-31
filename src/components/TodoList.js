import React from 'react'

function TodoList(props) {
    return (
        <div>
            <ul>
                {props.todoList.map((todo) => (
                    <li key={todo.id}>
                        {todo.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
