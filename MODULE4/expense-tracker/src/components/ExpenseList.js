import React from "react";

function ExpenseList({ expenses }) {
  const total = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <div>
      <h2>Expense List</h2>

      {expenses.length === 0 ? (
        <p>No Expenses Added</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.title} - ₹{expense.amount}
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default ExpenseList;