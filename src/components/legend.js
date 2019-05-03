import React from "react";
import { config } from "../utils/donut.config";

export const Legend = () => {
  return (
    <React.Fragment>
      <div className="custom-legend">
        {config.data.columns.map((column, index) => {
          return (
            <div className="custom-legend-item" key={index}>
              <div
                style={{
                  backgroundColor: config.color.pattern[index]
                }}
                className="custom-legend-tile"
              />
              <span>{column[0]}</span>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
