import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList() {
    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return <p>Not tasks found</p>;
    }

    return (
        <ul>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
}
