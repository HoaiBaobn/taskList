const TaskHeader = () => {
    return (
        <header class="header">
            <h1>Tasks</h1>
            <input
                type="text"
                class="new-task"
                placeholder="What needs to be done?"
            />
        </header>
    );
};

export default TaskHeader;
