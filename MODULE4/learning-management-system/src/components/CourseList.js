import React from "react";
import CourseCard from "./CourseCard";

function CourseList() {
  const courses = [
    {
      id: 1,
      name: "Web Development",
      instructor: "John",
      duration: "3 Months",
    },
    {
      id: 2,
      name: "Python Programming",
      instructor: "David",
      duration: "2 Months",
    },
    {
      id: 3,
      name: "Data Science",
      instructor: "Sarah",
      duration: "4 Months",
    },
  ];

  return (
    <div>
      <h2>Available Courses</h2>

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;