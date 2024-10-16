import React, {useState} from 'react'

export default function Input({addTodo}) {
    const [value, setValue] = useState("");

    const toSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={toSubmit}>
            <input type="text" placeholder='Insert Task' value={value} onChange={e => setValue(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    )
}
