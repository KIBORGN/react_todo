import React from 'react'
import Item from './Item'

export default function List({todos, deleteTodo, toggleComplete}) {
    return (
        <ul>
            {todos.map(todo => (
                <Item 
                key={todo.id}
                todo={todo}
                deleteTodo = {deleteTodo}
                toggleComplete={toggleComplete} 
                />
            ))}
        </ul>
    )
}
