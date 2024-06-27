import React, { useState } from "react";
import ChartComponent from "./components/ChartComponent";
import TimeframeSelector from "./components/TimeframeSelectorComponent";
import data from "./services/chartData.json";
import "./App.css";

const App: React.FC = () => {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );

  const handleTimeframeChange = (
    newTimeframe: "daily" | "weekly" | "monthly"
  ) => {
    setTimeframe(newTimeframe);
  };

  return (
    <div className="App">
      <h1 className="app-title">DataPulse App</h1>
      <TimeframeSelector
        onTimeframeChange={handleTimeframeChange}
        activeTimeframe={timeframe}
      />
      <ChartComponent data={data[timeframe]} />
    </div>
  );
};

export default App;
