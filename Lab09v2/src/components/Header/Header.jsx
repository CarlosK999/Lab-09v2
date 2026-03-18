import { useContext } from 'react';
import { Context } from '../context/TaskContext';

export default function Header() {
    const { tasks } = useContext(Context);
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;

    return (
        <header>
            <h1>TaskList</h1>
            <p>Total: {total}</p>
            <p>Completeds: {completed}</p>
        </header>
    )
}