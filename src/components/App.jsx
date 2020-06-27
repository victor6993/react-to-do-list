import React, { useState } from "react";
import Items from "./Items";

function App() {
  const [task, setTask] = useState([]);
  const [itemTask, setItemTask] = useState("");

  function getValue(e) {
    const value = e.target.value;
    setItemTask(value);
  }

  function getTask() {
    setTask(prevValues => [...prevValues, itemTask]);
    setItemTask("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={getValue} value={itemTask} type="text" />
        <button onClick={getTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {task.map((task, index) => (
            <Items key={index} item={task} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
