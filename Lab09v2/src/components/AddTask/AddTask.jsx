import { useState, useContext } from 'react';
import { Context } from '../context/TaskContext';

export default function AddTask() {
    const [text, setText] = useState('');
    const { addTask } = useContext(Context);

    function handleSubmit(e) {
        e.preventDefault();
        addTask(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                placeholder="Task" />
            <button>Add Task</button>
        </form>
    )
}