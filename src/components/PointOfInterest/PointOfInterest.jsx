import React, { useState } from "react";
import PointsOfInterests from "../../lib/PointsOfInterests";
import Marker from "./Marker/Marker";
import { useActivePointOfInterestStore } from "../../store/ActivePointOfInterestStore";
import { Html } from "@react-three/drei";

const PointOfInterestItem = ({ pointOfInterest }) => {
  const [isOccluded, setIsOccluded] = useState(false);
  const setActivePointOfInterest = useActivePointOfInterestStore(
    (state) => state.setActivePointOfInterest
  );
  return (
    <Html
      occlude
      onOcclude={setIsOccluded}
      position={pointOfInterest.position}
      style={{
        transition: "all 0.2s",
        opacity: isOccluded ? 0 : 1,
      }}
    >
      <Marker
        onClick={() => setActivePointOfInterest(pointOfInterest)}
        name={pointOfInterest.icon}
      />
    </Html>
  );
};

const PointOfInterest = () => {
  return (
    <>
      {PointsOfInterests.map((pointOfInterest) => (
        <PointOfInterestItem
          key={pointOfInterest.id}
          pointOfInterest={pointOfInterest}
        />
      ))}
    </>
  );
};

export default PointOfInterest;
