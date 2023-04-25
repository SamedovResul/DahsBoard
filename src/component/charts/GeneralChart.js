import React from "react";
import CalculateFunc from "../Calculate";
import Data from "../../data/data";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Barchart = (props) => {
  const { TotalSmoke, TotalPhone, TotalSleep, TotalMask } = CalculateFunc(Data);

  const data = {
    labels: ["smoke", "phone", "sleep", "Sürət Limiti"],
    datasets: [
      {
        data: [TotalSmoke, TotalPhone, TotalSleep, TotalMask],
        backgroundColor: ["red", "blue", "green", "orange"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="generalchart">
      <b>saat</b>
      <p> {props.name} </p>
      <Bar height={100} data={data} />
    </div>
  );
};

export default Barchart;
