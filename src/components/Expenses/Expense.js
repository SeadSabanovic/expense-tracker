import { Chip, Divider, Typography } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function Expense({ expense, index, isLastChild }) {
  // console.log(expense);
  return (
    <div className="expense">
      <Typography variant="h6" gutterBottom>
        {expense.name}
      </Typography>
      <div className="expense__content">
        <Chip
          icon={<AttachMoneyIcon />}
          label={`${expense.amount}`}
          color="primary"
        />
        <Chip icon={<CalendarMonthIcon />} label={`${expense.date}`} />
      </div>
      {!isLastChild ? <Divider /> : null}
    </div>
  );
}
