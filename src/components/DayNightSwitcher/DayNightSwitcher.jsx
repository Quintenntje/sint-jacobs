import "./DayNightSwitcher.css";
import React from "react";
import { SunIcon, MoonIcon } from "lucide-react";

import { useDayNightStore } from "../../store/dayNightStore";

const DayNightSwitcher = () => {
  const { isNight, setIsNight, setIsDay } = useDayNightStore();

  return (
    <div className="day-night-switcher">
      <div
        className={`day-night-switcher__button ${!isNight ? "active" : ""}`}
        onClick={setIsDay}
      >
        <SunIcon size={16} />
      </div>
      <div
        className={`day-night-switcher__button ${isNight ? "active" : ""}`}
        onClick={setIsNight}
      >
        <MoonIcon size={16} />
      </div>
    </div>
  );
};

export default DayNightSwitcher;
