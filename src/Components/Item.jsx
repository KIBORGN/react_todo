import React, { useState} from 'react'
import Modal from '../UI/Modal/Modal';

export default function Item({todo, deleteTodo}) {
    const [modal, setModal] = useState(false);


    return (
        <li >
            <span onClick={() => setModal(true)}>{todo.text}</span>
            

            <Modal visible={modal} setVisible={setModal}>{todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </Modal>
        </li>
    )
}
