import React, { useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";

import "./ChartComponent.css";

interface DataPoint {
  timestamp: string;
  value: number;
}

interface ChartComponentProps {
  data: DataPoint[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const handleExportChart = () => {
    if (chartRef.current) {
      htmlToImage
        .toPng(chartRef.current)
        .then(function (dataUrl) {
          saveAs(dataUrl!, "chart.png");
        })
        .catch(function (error) {
          console.error("Error exporting chart as PNG:", error);
        });
    }
  };

  return (
    <div className="chart-container" ref={chartRef}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#000" // Ensure the line color is black
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      {/* Export PNG button */}
      <button className="export-png-button" onClick={handleExportChart}>
        Export Chart as PNG
      </button>
      <a
        href="https://www.linkedin.com/in/saichandanyadav/"
        className="developer"
        target="_blank"
        rel="noreferrer"
      >
        Follow the Developer
      </a>
    </div>
  );
};

export default ChartComponent;
