import Header from "./components/Header/Header.jsx"
import TaskList from "./components/TaskList/TaskList.jsx"
import AddTask from "./components/AddTask/AddTask.jsx"
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <AddTask />
      <TaskList />
    </div>
  )
}

export default App
