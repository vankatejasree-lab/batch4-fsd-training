import React from "react";
import { Link } from "react-router-dom";

function TaskDashboard({ tasks }) {
  return (
    <div>
      <h2>Task Dashboard</h2>

      <Link to="/addtask">
        <button>Add New Task</button>
      </Link>

      <ul>
        {tasks.length === 0 ? (
          <p>No Tasks Available</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskDashboard;
