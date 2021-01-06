import classes from "./TaskCompleted.module.css";

const TaskCompleted = () => {
    return (
        <div className={classes.Completed}>
            <div className={classes.Title}>
                <input className={classes.ToggleAll} type="checkbox" />
                <label></label>
                <span>Completed</span>
                <span className={classes.TaskCompleteTotal}>4</span>
            </div>
            <ul className="tasksList">
                <li className="taskItem">
                    <div className="view">
                        <input className="toggle" type="checkbox" checked />
                        <label className={classes.TaskCompleted}>
                            Cà rốt 2kg
                        </label>
                        <button className="desTroy"></button>
                    </div>
                </li>
                <li className="taskItem">
                    <div className="view">
                        <input className="toggle" type="checkbox" checked />
                        <label className={classes.TaskCompleted}>Táo 2kg</label>
                        <button className="desTroy"></button>
                    </div>
                </li>
                <li className="taskItem">
                    <div className="view">
                        <input className="toggle" type="checkbox" checked />
                        <label className={classes.TaskCompleted}>
                            Cà Chua 1kg
                        </label>
                        <button className="desTroy"></button>
                    </div>
                </li>
                <li className="taskItem">
                    <div className="view">
                        <input className="toggle" type="checkbox" checked />
                        <label className={classes.TaskCompleted}>
                            Hành tây 1 củ
                        </label>
                        <button className="desTroy"></button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default TaskCompleted;
