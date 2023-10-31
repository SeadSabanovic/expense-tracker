import { LinearProgress, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Graph(props) {
  const initialMonths = [
    {
      month: "January",
      amount: 0,
    },
    {
      month: "February",
      amount: 0,
    },
    {
      month: "March",
      amount: 0,
    },
    {
      month: "April",
      amount: 0,
    },
    {
      month: "May",
      amount: 0,
    },
    {
      month: "June",
      amount: 0,
    },
    {
      month: "July",
      amount: 0,
    },
    {
      month: "August",
      amount: 0,
    },
    {
      month: "September",
      amount: 0,
    },
    {
      month: "October",
      amount: 0,
    },
    {
      month: "November",
      amount: 0,
    },
    {
      month: "December",
      amount: 0,
    },
  ];
  const [months, setMonths] = useState(initialMonths);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const expenses = props.expenses;
    // Create a new array based on the 'months' state
    const newMonths = [...initialMonths];
    let sum = 0;
    // Update the 'newMonths' array based on 'expenses'
    for (let i = 0; i < expenses.length; i++) {
      const dateParts = expenses[i].date.split("-"); // Split the date into day, month, and year
      const month = parseInt(dateParts[1], 10); // Parse the month as an integer (assuming it's in MM format)
      console.log(expenses[i].date);
      const expenseAmount = parseFloat(expenses[i].amount);
      newMonths[month - 1].amount += isNaN(expenseAmount) ? 0 : expenseAmount;
      sum += isNaN(expenseAmount) ? 0 : expenseAmount;
    }

    setMonths(newMonths);
    setTotal(sum);
  }, [props.expenses]);

  return (
    <Paper sx={{ padding: "2rem", marginBottom: "2rem" }}>
      <Typography variant="h5" component="h3" mb={4}>
        Expenseses By Month
      </Typography>
      <div className="graph">
        {months.map((month, index) => (
          <div className="graph__month" key={index}>
            <div className="graph__month__top">
              <Typography variant="subtitle1">{month.month}</Typography>
              <span className="graph__month__amount">
                <Typography variant="subtitle1">${month.amount}</Typography>
              </span>
            </div>
            <LinearProgress
              color="primary"
              variant="determinate"
              value={(month.amount / total) * 100}
            />
          </div>
        ))}
      </div>
      <Typography mt={3} variant="h5">
        Total: ${total}
      </Typography>
    </Paper>
  );
}
