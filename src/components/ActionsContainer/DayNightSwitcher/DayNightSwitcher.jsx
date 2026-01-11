import "./DayNightSwitcher.css";
import { useRef, useEffect } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

import { useDayNightStore } from "../../../store/dayNightStore";

const DayNightSwitcher = () => {
  const { isNight, setIsNight, setIsDay } = useDayNightStore();
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }, [isNight]);

  return (
    <>
      <audio ref={audioRef} src="/sounds/switch.mp3" />

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
    </>
  );
};

export default DayNightSwitcher;
