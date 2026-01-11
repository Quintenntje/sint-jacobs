import "./NarratorToggle.css";
import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { useNarratorStore } from "../../../store/narratorStore";

const NarratorToggle = () => {
  const { isNarrator, toggleNarrator } = useNarratorStore();

  return (
    <div className="narrator-toggle">
      <div className="narrator-toggle__button" onClick={toggleNarrator}>
        {isNarrator ? <Volume2Icon size={16} /> : <VolumeXIcon size={16} />}
      </div>
    </div>
  );
};

export default NarratorToggle;
