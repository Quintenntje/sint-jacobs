import "./actionsContainer.css";
import DayNightSwitcher from "./DayNightSwitcher/DayNightSwitcher";
import NarratorToggle from "./NarratorToggle/NarratorToggle";

const ActionsContainer = () => {
  return (
    <div className="actions-container">
      <DayNightSwitcher />
      <NarratorToggle />
    </div>
  );
};

export default ActionsContainer;
