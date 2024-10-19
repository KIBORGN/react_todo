import React, { useState} from 'react'
import Modal from '../UI/Modal/Modal';

export default function Item({todo, deleteTodo, toggleComplete}) {
    const [modal, setModal] = useState(false);

    const handleToggleComplete = () => {
        toggleComplete(todo.id);
    };

    return (
        <>
        <li  className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => setModal(true)}>{todo.text}</span>
        </li>
        <Modal visible={modal} setVisible={setModal}>{todo.text}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button onClick={handleToggleComplete}>
        {todo.completed ? 'Undone' : 'done'}</button>
        </Modal>
        </>
    )
}   
