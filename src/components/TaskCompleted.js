import classes from "./TaskCompleted.module.css";
import { StarOutlined } from "@ant-design/icons";

const TaskCompleted = ({
    completeItems,
    maskTasUncompleted,
    checked,
    products,
}) => {
    return (
        <div className={classes.Completed}>
            <div className={classes.Title}>
                <input className={classes.ToggleAll} type="checkbox" />
                <label></label>
                <span>Completed</span>
                <span className={classes.TaskCompleteTotal}>4</span>
            </div>

            <ul className="tasksList">
                {completeItems.map((tasks) => {
                    return (
                        <li key={tasks.id} className="taskItem">
                            <div className="view">
                                <div>
                                    <input
                                        className="toggle"
                                        name={tasks.item}
                                        type="checkbox"
                                        defaultChecked={
                                            tasks.isCompleted ? checked : ""
                                        }
                                        onClick={() =>
                                            maskTasUncompleted(tasks.id)
                                        }
                                    />
                                    <label>{tasks.name}</label>
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
