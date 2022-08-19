import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect } from "react";
import { server } from "../../api";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartComponent() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    getDataChart();
    console.log(labels);
  }, []);

  const getDataChart = async () => {
    const res = await axios.get(server.API_GET_CHARTDATA);
    setData(res.data);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart Scrap",
        padding: {
          top: 10,
          bottom: 30,
          width: 100,
        },
      },
    },
  };

  const labels = datas.map((data) => data.Shiftto);

  const data = {
    labels,
    datasets: [
      {
        label: "Scrap All",
        data: datas.map((data) => data.sumweight),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-12">
            <Line options={options} data={data}/>
          </div>
        </div>
      </div>
    </>
  );
}
