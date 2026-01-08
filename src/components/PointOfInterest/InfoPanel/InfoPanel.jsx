import React from "react";
import "./infoPanel.css";
import { X } from "lucide-react";
import Button from "../../Button/Button";
import { useActivePointOfInterestStore } from "../../../store/ActivePointOfInterestStore";
import Link from "../../Link/Link";

const InfoPanel = ({ pointOfInterest, open = false }) => {
  const reset = useActivePointOfInterestStore((state) => state.reset);

  return (
    <div className={`info-panel ${open ? "open" : "closed"}`}>
      <div className="info-panel__close">
        <Button icon={true} onClick={() => reset()}>
          <X />
        </Button>
      </div>
      <div className="info-panel__content">
        <h2 className="info-panel__title">{pointOfInterest.name}</h2>
        <p className="info-panel__description">{pointOfInterest.description}</p>
        {pointOfInterest.image && (
          <img
            className="info-panel__image"
            src={pointOfInterest.image}
            alt={pointOfInterest.name}
          />
        )}
        {pointOfInterest.link && (
          <Link href={pointOfInterest.link} type="external">
            Lees meer
          </Link>
        )}
      </div>
    </div>
  );
};

export default InfoPanel;
