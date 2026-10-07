import React from "react";

function StudentList() {
  const students = [
    "Thejasri",
    "Priya",
    "Rahul",
    "Kiran",
    "Anjali",
  ];

  return (
    <div>
      <h2>Students</h2>

      <div className="card">
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentList;