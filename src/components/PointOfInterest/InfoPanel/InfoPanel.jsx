import React from "react";
import "./infoPanel.css";
import { X } from "lucide-react";
import Button from "../../Button/Button";
import { useActivePointOfInterestStore } from "../../../store/ActivePointOfInterestStore";

const InfoPanel = ({ pointOfInterest, isOpen }) => {
  const reset = useActivePointOfInterestStore((state) => state.reset);

  return (
    <div className={`info-panel ${isOpen ? "open" : "closed"}`}>
      <div className="info-panel__close">
        <Button icon={true} onClick={() => reset()}>
          <X />
        </Button>
      </div>
      <div className="info-panel__content">
        <h2>{pointOfInterest.name}</h2>
        <p>{pointOfInterest.description}</p>
        {pointOfInterest.image && (
          <img src={pointOfInterest.image} alt={pointOfInterest.name} />
        )}
        {pointOfInterest.link && (
          <a
            href={pointOfInterest.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {pointOfInterest.link}
          </a>
        )}
      </div>
    </div>
  );
};

export default InfoPanel;
