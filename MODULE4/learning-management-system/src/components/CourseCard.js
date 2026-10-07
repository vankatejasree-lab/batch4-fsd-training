import React from "react";

function CourseCard({ course }) {
  return (
    <div className="card">
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
    </div>
  );
}

export default CourseCard;