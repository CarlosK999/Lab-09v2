export const Context = createContext();

export default function TaskContext({ children }) {
    const [tasks, setTasks] = useState([]);

    function addTask(task) {
        const newTask = {
            id: Date.now(),
            text: task,
            completed: false
        };
        setTasks([...tasks, newTask]);
    }

    function markedCompleted(id) {
        setTasks(prev => prev.map(task => task.id === id ?
            { ...task, completed: !task.completed } : task));
    }

    return (
        <Context.Provider value={{ tasks, addTask, markedCompleted }}>
            {children}
        </Context.Provider>
    )

}