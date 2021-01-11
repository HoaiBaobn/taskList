import { StarOutlined } from "@ant-design/icons";

const TaskList = ({ products }) => {
    return (
        <ul className="tasksList">
            <li className="taskItem">
                <div className="view">
                    <div>
                        <input className="toggle" type="checkbox" />
                        <label>{products.name}</label>
                    </div>
                    <button className="desTroy">
                        <StarOutlined />
                    </button>
                </div>
            </li>
        </ul>
    );
};

export default TaskList;
