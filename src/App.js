import "./App.css";
import { useState } from "react";
import TaskHeader from "./components/TaskHeader";
import TaskList from "./components/TaskList";
import TaskCompleted from "./components/TaskCompleted";

function App() {
    const [products, SetProducts] = useState([]);
    const [text, setText] = useState("");
    const [checked] = useState(true);

    const addTasks = (value) => {
        setText(value);
    };

    const onAddTask = () => {
        SetProducts([
            ...products,
            {
                id: new Date().getTime(),
                name: text,
                isCompleted: false,
            },
        ]);
        setText("");
    };

    const incompleteItems = products.filter((item) => !item.isCompleted);
    const completeItems = products.filter((item) => item.isCompleted);

    const maskTaskCompleted = (id) => {
        const tasks = products.find((task) => task.id === id);
        tasks.isCompleted = true;
        SetProducts((products) => [
            ...products.filter((item) => item.id !== id),
            tasks,
        ]);
    };
    const maskTasUncompleted = (id) => {
        const tasks = products.find((task) => task.id === id);
        tasks.isCompleted = false;
        SetProducts((products) => [
            ...products.filter((item) => item.id !== id),
            tasks,
        ]);
    };

    return (
        <div className="app">
            <TaskHeader addTasks={addTasks} onAddTask={onAddTask} text={text} />

            {incompleteItems.map((product) => (
                <TaskList
                    key={product.name}
                    products={product}
                    maskTaskCompleted={maskTaskCompleted}
                    incompleteItems={incompleteItems}
                />
            ))}

            <TaskCompleted
                completeItems={completeItems}
                checked={checked}
                maskTasUncompleted={maskTasUncompleted}
            />
        </div>
    );
}

export default App;
