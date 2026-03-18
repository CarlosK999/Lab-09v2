import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();
    addTask(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button>Add Task</button>
    </form>
  );
}