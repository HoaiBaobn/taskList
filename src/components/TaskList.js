const TaskList = () => {
    return (
        <ul className="tasksList">
            <li className="taskItem">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Nho Mỹ 2kg</label>
                    <button className="desTroy"></button>
                </div>
            </li>
            <li className="taskItem">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Kiwi 2kg</label>
                    <button className="desTroy"></button>
                </div>
            </li>
            <li className="taskItem">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Mít 2kg</label>
                    <button className="desTroy"></button>
                </div>
            </li>
            <li className="taskItem">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Sầu riêng 2kg</label>
                    <button className="desTroy"></button>
                </div>
            </li>
            <li className="taskItem">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Táo Mỹ 2kg</label>
                    <button className="desTroy"></button>
                </div>
            </li>
        </ul>
    );
};

export default TaskList;
