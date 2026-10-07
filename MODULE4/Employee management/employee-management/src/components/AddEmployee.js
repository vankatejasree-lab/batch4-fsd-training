import React, { useState } from "react";

function AddEmployee({ addEmployee }) {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);

    setEmployee({
      name: "",
      department: "",
      salary: "",
    });
  };

  return (
    <div className="card">
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;