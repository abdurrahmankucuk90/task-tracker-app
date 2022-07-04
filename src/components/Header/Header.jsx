import React from "react";
import styling from "./Header.module.css";
import { useState } from "react";
import AddTask from "../AddTask/AddTask";

const Header = () => {
    const [show, setShow] = useState(true);
    return (
    <div className={styling.header}>
            <h1 className={styling.title}>Task Tracker</h1>
            <button className={styling.button} style={show ? {backgroundColor:'purple'}: {backgroundColor:'red'}} onClick={()=> setShow(!show)}>{show ? 'Hide Task Add Bar' : 'Show Task Add Bar'}</button>
            {show && <AddTask/>}

        </div>
    );
};

export default Header;
