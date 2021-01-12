import { StarOutlined } from "@ant-design/icons";

const TaskList = ({ products, maskTaskCompleted }) => {
    return (
        <ul className="tasksList">
            <li key={products.id}>
                <div className="taskItem addTask">
                    <div className="view">
                        <input
                            className="toggle"
                            name={products.item}
                            type="checkbox"
                            onClick={() => maskTaskCompleted(products.id)}
                        />
                        <label>{products.name}</label>
                    </div>
                    {<StarOutlined />}
                </div>
            </li>
        </ul>
    );
};

export default TaskList;
