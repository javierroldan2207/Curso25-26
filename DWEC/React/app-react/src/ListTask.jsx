import React, { useState } from "react";

export default function ListTask() {

    const [inputTask, setValuesTask] = useState("");
    const [listTask, setValuesList] = useState([]);

    function handleChange(e) {
        setValuesTask(e.target.value);
    }

    function handleClick() {
        if (inputTask.trim() !== "") {
            setValuesList([...listTask, inputTask]);
        }
        setValuesTask("");
    }

    function handleDelete(indexDelete) {
        const newList = listTask.filter((task, index) => index !== indexDelete);
        setValuesList(newList);
    }


    return (
        <>

            <div>
                <p>Add task</p>
                <input type="text" name="task" id="task" value={inputTask} onChange={handleChange} placeholder="New task..." />
                <button type="text" onClick={handleClick}>Add task</button>
                <ul>{listTask.map((task, index) => (<li key={index}>{task} <button onClick={() => handleDelete(index)}>X</button></li>))}</ul>
            </div>


        </>
    )
}