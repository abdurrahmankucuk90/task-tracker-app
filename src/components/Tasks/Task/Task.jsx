import React from "react";
import styling from "./Task.module.css";
import { useState } from "react";

const Task = () => {
    const [show, setShow] = useState(false);

    return <div className={styling.taskBar} onClick={() => setShow(!show)}>
      {show && <div className={styling.clicked}></div>}
      
    </div>;
};

export default Task;
