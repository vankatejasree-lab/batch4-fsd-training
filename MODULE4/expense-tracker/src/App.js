import React, { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <AddExpense addExpense={addExpense} />

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;