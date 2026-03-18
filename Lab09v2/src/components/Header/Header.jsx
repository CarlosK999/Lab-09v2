import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function Header() {
  const { tasks } = useContext(TaskContext);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  return (
    <header>
      <h1>TaskList</h1>
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
    </header>
  );
}