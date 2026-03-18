import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function TaskItem({ task }) {
  const { markedCompleted, removeTask } = useContext(TaskContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => markedCompleted(task.id)}
      />
      {task.text}
      <button onClick={() => removeTask(task.id)}>
              Delete
            </button>
    </li>
  );
}