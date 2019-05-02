import React from "react";
import "./App.css";
import C3Chart from "react-c3js";
import { styles } from "./utils/donut.config";

const App = () => {
  return (
    <div className="chart-container">
      <C3Chart
        data={styles.data}
        donut={styles.donut}
        legend={styles.legend}
        tooltip={styles.tooltip}
        className="chart"
        color={styles.color}
      />

      <div className="custom-legend">
        {styles.data.columns.map((column, index) => {
          return (
            <div className="custom-legend-item" key={index}>
              <div
                style={{
                  backgroundColor: styles.color.pattern[index]
                }}
                className="custom-legend-tile"
              />
              <span>{column[0]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
