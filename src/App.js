import "./App.css";
import TaskHeader from "./components/TaskHeader";
import TaskList from "./components/TaskList";
import TaskCompleted from "./components/TaskCompleted";
import { PRODUCTS } from "./data";
import { useState } from "react";

function App() {
    const [products, SetProducts] = useState(PRODUCTS);

    const addTasks = (name = {}) => {
        const newTodos = [...products, { name }];
        SetProducts(newTodos);
    };

    return (
        <div className="app">
            <TaskHeader addtask={addTasks} />

            {products.map((product) => (
                <TaskList key={product.name} products={product} />
            ))}

            <TaskCompleted />
        </div>
    );
}

export default App;
