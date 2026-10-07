import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <CourseList />
        <StudentList />
      </div>
    </div>
  );
}

export default App;