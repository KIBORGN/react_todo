import React from 'react'

export default function Item({todo}) {
    return (
        <li>
            <span>{todo.text}</span>
        </li>
    )
}
