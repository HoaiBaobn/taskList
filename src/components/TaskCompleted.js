import classes from "./TaskCompleted.module.css";
import { StarOutlined } from "@ant-design/icons";

const TaskCompleted = ({ completeItems, maskTasUncompleted, checked }) => {
    return (
        <div className={classes.Completed}>
            <div className={classes.Title}>
                <input className={classes.ToggleAll} type="checkbox" />
                <label></label>
                <span>Completed</span>
                <span className={classes.TaskCompleteTotal}>4</span>
            </div>

            <ul className="tasksList">
                {completeItems.map((task) => {
                    return (
                        <li key={task.id} className="taskItem">
                            <div className="view">
                                <div>
                                    <input
                                        className="toggle"
                                        name={task.item}
                                        type="checkbox"
                                        defaultChecked={
                                            task.isCompleted ? checked : ""
                                        }
                                        onClick={() =>
                                            maskTasUncompleted(task.id)
                                        }
                                    />
                                    <label>{task.name}</label>
                                </div>
                                <StarOutlined />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TaskCompleted;
