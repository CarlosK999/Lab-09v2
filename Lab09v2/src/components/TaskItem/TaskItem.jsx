import { useContext } from "react";
import { Context } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { markedCompleted } = useContext(Context);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => markedCompleted(task.id)}
      />
      {task.text}
    </li>
  );
}