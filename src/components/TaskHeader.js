import { memo } from "react";

const TaskHeader = memo((props) => {
    const { onAddTask, text, addTasks } = props;

    return (
        <header className="header">
            <h1>Tasks</h1>
            <div className="addTask">
                <input
                    type="text"
                    value={text}
                    className="new-task"
                    placeholder="What needs to be done?"
                    onChange={(e) => addTasks(e.target.value)}
                />
                <span onClick={() => onAddTask()}>+</span>
            </div>
        </header>
    );
});

export default TaskHeader;
