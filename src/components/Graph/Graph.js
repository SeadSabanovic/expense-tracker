import { LinearProgress, Paper, Typography } from "@mui/material";
import React from "react";

export default function Graph() {
  // Array of all months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Paper sx={{ padding: "2rem", marginBottom: "2rem" }}>
      <Typography variant="h5" component="h3" mb={4}>
        Expenseses By Month
      </Typography>
      <div className="graph">
        {months.map((month, index) => (
          <div className="graph__month" key={index}>
            <Typography mb={1} variant="subtitle1">
              {month}
            </Typography>
            <LinearProgress color="primary" />
          </div>
        ))}
      </div>
    </Paper>
  );
}
