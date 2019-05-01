const lightBlue = "rgb(193, 217, 255)";
const mediumBlue = "rgb(61, 136, 255)";
const darkBlue = "rgb(0, 62, 160)";
const darkerBlue = "rgb(4, 34, 81)";

const colors = [lightBlue, mediumBlue, darkBlue, darkerBlue];

const columns = [
  ["People who like cookies", 75],
  ["Cookie monsters", 25],
  ["Randos", 25],
  ["Other", 50]
];

const data = {
  columns: columns,
  type: "donut"
};

const color = {
  pattern: colors
};

const donut = {
  title: "DONUUUUUTs",
  width: 35,
  label: {
    show: false
  }
};

const legend = {
  position: "right"
};

const tooltip = {
  contents: data => {
    return data[0].name;
  }
};

export const styles = { data, donut, legend, tooltip, color };
