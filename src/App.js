import React from "react";
import "./App.css";
import C3Chart from "react-c3js";
import { styles } from "./utils/donut.config";

const App = () => {
  return (
    <>
      <C3Chart
        data={styles.data}
        donut={styles.donut}
        legend={styles.legend}
        tooltip={styles.tooltip}
        bindto="chart"
        className="chart"
        color={styles.color}
      />
    </>
  );
};

export default App;
