import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./components/addtask";
import TaskDashboard from "./components/taskdashboard";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <h1>Task Manager</h1>

        <Routes>
          <Route
            path="/"
            element={<TaskDashboard tasks={tasks} />}
          />

          <Route
            path="/addtask"
            element={<AddTask addTask={addTask} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;