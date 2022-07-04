import styling from "./AddTask.module.css";
import { useState, useEffect } from "react";

const AddTask = () => {
    const [value, setValue] = useState({});
    const [counter, setCounter] = useState(0)

    useEffect(() => {
       window.localStorage.setItem('counter', counter)

        return () => {};
    }, []);

    const saveLocalStorage = (e) => {
        setCounter(counter + 1)
     
        window.localStorage.setItem(`task${counter}`, e.target.parentElement.children[1].value);
        window.localStorage.setItem(`date${counter}`, e.target.parentElement.children[3].value);
    };

    return (
        <div className={styling.title}>
            <label htmlFor="task">Task</label>
            <input type="text" name="task" id="task" />

            <label htmlFor="meeting-time">Date:</label>
            <input
                type="datetime-local"
                id="meeting-time"
                name="meeting-time"
                // value="2022-07-04T19:30"
                // min="2022-07-04T00:00"
            ></input>

            <button className={styling.saveBtn} onClick={saveLocalStorage}>
                Save Task
            </button>
        </div>
    );
};

export default AddTask;
