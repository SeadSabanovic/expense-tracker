import React, { useState } from "react";
import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/en-gb";
import dayjs from "dayjs";

export default function NewExpenseForm(props) {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [amount, setAmount] = useState(0);
  const [amountError, setAmountError] = useState(false);
  const [date, setDate] = useState(dayjs());

  const clearForm = () => {
    setName("");
    setAmount(0);
    setDate(dayjs());
  };

  const validateName = () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const validateAmount = () => {
    if (!amount || amount <= 0) {
      setAmountError(true);
    } else {
      setAmountError(false);
    }
  };

  const validateForm = () => {
    validateName();
    validateAmount();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    const expense = {
      id: Math.random() * 1000,
      name,
      amount,
      date: dayjs(date).format("DD-MM-YYYY"),
    };

    props.onAddExpense(expense);
    clearForm();
  };

  return (
    <Paper sx={{ padding: "2rem", marginBottom: "2rem" }}>
      <Typography variant="h5" component="h3" mb={4}>
        Add New Expense
      </Typography>
      <form
        className="expense-form"
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => validateName()}
          label="Expense Name"
          variant="outlined"
          error={nameError}
          required
        />
        <TextField
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          label="Expense Amount"
          variant="outlined"
          required
          error={amountError}
          onBlur={() => validateAmount()}
          InputProps={{
            min: 1,
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <DatePicker
            required
            value={date}
            fullWidth
            onChange={(e) => setDate(e)}
          />
        </LocalizationProvider>
        <Button type="submit" variant="contained" endIcon={<AddIcon />}>
          Add
        </Button>
      </form>
    </Paper>
  );
}
