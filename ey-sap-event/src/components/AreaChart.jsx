import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip
} from "chart.js";
import { COLORS } from "../constants/colors";

ChartJS.register(ArcElement, Tooltip);

export default function AreaChart() {

 const data = {
  labels: ["Global", "Americas", "EMEIA", "APAC"],
  datasets: [
    {
      data: [10,10, 5, 2],
      backgroundColor: [
        COLORS.global,
        COLORS.americas,
        COLORS.emeia,
        COLORS.apac
      ],
      hoverBackgroundColor: [
        COLORS.global,
        COLORS.americas,
        COLORS.emeia,
        COLORS.apac
      ],
      borderWidth: 0,
    },
  ],
};

  const options = {
    cutout: "70%",
    plugins: {
      legend: { display: false }
    },
  };

  return (
    <div className="chart-container">
      <Doughnut key={JSON.stringify(data)} data={data} options={options} />
    </div>
  );
}