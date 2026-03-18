import { useContext } from "react";
import { Context } from "../context/TaskContext";

export default function TaskList() {
    const { tasks } = useContext(Context);
    return (
        <ul>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
}
