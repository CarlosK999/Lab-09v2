import { createContext, useState } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    function addTask(task) {
        const newTask = {
            id: Date.now(),
            text: task,
            completed: false
        };

        setTasks(prev => [...prev, newTask]);
    }

    function markedCompleted(id) {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    }

     function removeTask(id) {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, markedCompleted, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
}