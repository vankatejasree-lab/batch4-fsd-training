import React, { useState } from "react";
import "./App.css";

import AddEmployee from "./components/AddEmployee";
import Employeelist from "./components/Employeelist";
import Employeesearch from "./components/Employeesearch";
import Employeeprofileupdate from "./components/Employeeprofileupdate";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <AddEmployee addEmployee={addEmployee} />

      <Employeesearch
        search={search}
        setSearch={setSearch}
      />

      <Employeelist employees={filteredEmployees} />

      <Employeeprofileupdate />
    </div>
  );
}

export default App;