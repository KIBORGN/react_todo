import React from 'react'
import Item from './Item'

export default function List({todos, deleteTodo}) {
    return (
        <ul>
            {todos.map(todo => (
                <Item 
                key={todo.id}
                todo={todo}
                deleteTodo = {deleteTodo}
                />
            ))}
        </ul>
    )
}
