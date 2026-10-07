import React from "react";

function Employeesearch({ search, setSearch }) {
  return (
    <div className="card">
      <input
        type="text"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Employeesearch;