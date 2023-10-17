import "./App.scss";
import { Container, Typography } from "@mui/material";
import Graph from "./components/Graph/Graph";
import { Masonry } from "@mui/lab";
import Expenses from "./components/Expenses/Expenses";
import NewExpenseForm from "./components/NewExpense/NewExpenseForm";

function App() {
  const expenses = [
    {
      id: 1,
      name: "Groceries",
      amount: 50.25,
      date: "2023-10-01",
      category: "Food",
    },
    {
      id: 2,
      name: "Gasoline",
      amount: 30.5,
      date: "2023-10-03",
      category: "Transportation",
    },
    {
      id: 3,
      name: "Dinner with Friends",
      amount: 75.0,
      date: "2023-10-05",
      category: "Entertainment",
    },
    {
      id: 4,
      name: "Internet Bill",
      amount: 60.0,
      date: "2023-10-08",
      category: "Utilities",
    },
    {
      id: 5,
      name: "Shopping",
      amount: 120.75,
      date: "2023-10-10",
      category: "Retail",
    },
  ];

  return (
    <div className="App">
      <Container maxWidth="lg" className="wrap">
        <Typography variant="h4" component="h1" mb={4}>
          Expenses Tracker
        </Typography>
        <Masonry columns={{ xs: 1, md: 2 }} spacing={2}>
          <NewExpenseForm />
          <Expenses expenses={expenses} />
          <Graph />
        </Masonry>
      </Container>
    </div>
  );
}

export default App;
