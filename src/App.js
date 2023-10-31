import "./App.scss";
import { Container, Typography } from "@mui/material";
import Graph from "./components/Graph/Graph";
import { Masonry } from "@mui/lab";
import Expenses from "./components/Expenses/Expenses";
import NewExpenseForm from "./components/NewExpense/NewExpenseForm";
import { useState } from "react";
import { EXPENSES } from "./constants";

function App() {
  const [expenses, setExpenses] = useState(EXPENSES);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="App">
      <Container maxWidth="lg" className="wrap">
        <Typography variant="h4" component="h1" mb={4}>
          Expenses Tracker
        </Typography>
        <Masonry columns={{ xs: 1, md: 2 }} spacing={2}>
          <NewExpenseForm onAddExpense={addExpense} />
          <Expenses expenses={expenses} />
          <Graph expenses={expenses} />
        </Masonry>
      </Container>
    </div>
  );
}

export default App;
