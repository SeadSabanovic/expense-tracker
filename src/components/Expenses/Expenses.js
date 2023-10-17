import { Typography } from "@mui/material";
import React from "react";
import Expense from "./Expense";

export default function Expenses({ expenses }) {
  return (
    <div className="expenses">
      <Typography variant="h5" component="h3" className="expenses__title">
        All Expenses
      </Typography>
      {expenses.map((expense, index) => (
        <Expense
          expense={expense}
          key={expense.id}
          index={index}
          isLastChild={expenses.length === index + 1}
        />
      ))}
    </div>
  );
}
