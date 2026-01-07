import React, { useState, useEffect } from "react";
import "./infoPanel.css";
import { X } from "lucide-react";
import Button from "../../Button/Button";
import { useActivePointOfInterestStore } from "../../../store/ActivePointOfInterestStore";
import Link from "../../Link/Link";

const InfoPanel = ({ pointOfInterest }) => {
  const reset = useActivePointOfInterestStore((state) => state.reset);
  const [displayedPOI, setDisplayedPOI] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pointOfInterest) {
      setDisplayedPOI(pointOfInterest);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [pointOfInterest]);

  if (!displayedPOI) return null;

  return (
    <div className={`info-panel ${isOpen ? "open" : "closed"}`}>
      <div className="info-panel__close">
        <Button icon={true} onClick={() => reset()}>
          <X />
        </Button>
      </div>
      <div className="info-panel__content">
        <h2 className="info-panel__title">{displayedPOI.name}</h2>
        <p className="info-panel__description">{displayedPOI.description}</p>
        {displayedPOI.image && (
          <img
            className="info-panel__image"
            src={displayedPOI.image}
            alt={displayedPOI.name}
          />
        )}
        {displayedPOI.link && (
          <Link href={displayedPOI.link} type="external">
            Lees meer
          </Link>
        )}
      </div>
    </div>
  );
};

export default InfoPanel;
