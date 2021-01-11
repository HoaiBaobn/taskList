import { memo, useState } from "react";

const TaskHeader = memo((props) => {
    const [text, setText] = useState("");
    const { addtask } = props;
    const onAddTask = (e) => {
        addtask({
            id: new Date().getTime(),
            name: text,
            isCompleted: false,
        });
        setText("");
    };

    return (
        <header className="header">
            <h1>Tasks</h1>
            <input
                type="text"
                className="new-task"
                placeholder="What needs to be done?"
                onChange={(e) => setText(e.target.value)}
            />
            <span onClick={(e) => onAddTask()}>+</span>
        </header>
    );
});

export default TaskHeader;
