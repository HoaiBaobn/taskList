import "./App.css";
import TaskHeader from "./components/TaskHeader";
import TaskList from "./components/TaskList";
import TaskCompleted from "./components/TaskCompleted";

function App() {
    return (
        <div className="app">
            <TaskHeader />
            <TaskList />
            <TaskCompleted />
        </div>
    );
}

export default App;
