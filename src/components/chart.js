import React from "react";
import C3Chart from "react-c3js";
import { config } from "../utils/donut.config";

export const Chart = () => {
  return (
    <React.Fragment>
      <C3Chart
        data={config.data}
        donut={config.donut}
        legend={config.legend}
        tooltip={config.tooltip}
        className="chart"
        color={config.color}
      />
    </React.Fragment>
  );
};
