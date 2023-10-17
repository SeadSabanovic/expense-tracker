import React, { useState, useRef } from "react";
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

export default function NewExpenseForm() {
  const datePickerRef = useRef(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [amount, setAmount] = useState(0);
  const [amountError, setAmountError] = useState(false);
  const [date, setDate] = useState(dayjs());

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
    console.log(nameError);
    console.log(amountError);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e);
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
          onChange={(e) => nameChangeHandler(e)}
          onBlur={() => validateName()}
          label="Expense Name"
          variant="outlined"
          error={nameError}
        />
        <TextField
          onChange={(e) => amountChangeHandler(e)}
          type="number"
          label="Expense Amount"
          variant="outlined"
          error={amountError}
          onBlur={() => validateAmount()}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <DatePicker
            value={date}
            ref={datePickerRef}
            fullWidth
            onChange={(e) => dateChangeHandler(e)}
          />
        </LocalizationProvider>
        <Button type="submit" variant="contained" endIcon={<AddIcon />}>
          Add
        </Button>
      </form>
    </Paper>
  );
}
