import React from "react";
import "./TimeframeSelector.css";

interface TimeframeSelectorProps {
  onTimeframeChange: (timeframe: "daily" | "weekly" | "monthly") => void;
  activeTimeframe: "daily" | "weekly" | "monthly";
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({
  onTimeframeChange,
  activeTimeframe,
}) => {
  return (
    <div className="timeframe-selector">
      <button
        className={activeTimeframe === "daily" ? "active" : ""}
        onClick={() => onTimeframeChange("daily")}
      >
        Daily
      </button>
      <button
        className={activeTimeframe === "weekly" ? "active" : ""}
        onClick={() => onTimeframeChange("weekly")}
      >
        Weekly
      </button>
      <button
        className={activeTimeframe === "monthly" ? "active" : ""}
        onClick={() => onTimeframeChange("monthly")}
      >
        Monthly
      </button>
    </div>
  );
};

export default TimeframeSelector;
