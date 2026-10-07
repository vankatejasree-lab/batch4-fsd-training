import React from "react";

function Employeelist({ employees }) {
  return (
    <div className="card">
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No Employees Found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>₹{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Employeelist;