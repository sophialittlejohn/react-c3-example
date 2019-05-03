import React from "react";
import "./App.css";
import { Legend } from "./components/legend";
import { Chart } from "./components/chart";

const App = () => {
  return (
    <div className="chart-container">
      <Chart />

      <Legend />
    </div>
  );
};

export default App;
