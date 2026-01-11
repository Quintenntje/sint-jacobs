import React, { useState } from "react";
import PointsOfInterests from "../../lib/PointsOfInterests";
import Marker from "./Marker/Marker";
import { useActivePointOfInterestStore } from "../../store/activePointOfInterestStore";
import { Html } from "@react-three/drei";
import useCameraAnimation from "../../animation/useCameraAnimation";
import { useNarratorStore } from "../../store/narratorStore";
import { useTextToSpeech } from "../../hooks/useTextToSpeech";

const PointOfInterestItem = ({ pointOfInterest }) => {
  const [isOccluded, setIsOccluded] = useState(false);

  const pointOfInterestIsActive = useActivePointOfInterestStore(
    (state) => state.activePointOfInterest?.name === pointOfInterest.name
  );

  const setActivePointOfInterest = useActivePointOfInterestStore(
    (state) => state.setActivePointOfInterest
  );

  const { isNarrator } = useNarratorStore();
  const { speak } = useTextToSpeech();

  const animateCamera = useCameraAnimation(pointOfInterest.cameraPosition);

  return (
    <Html
      zIndexRange={100}
      occlude
      onOcclude={setIsOccluded}
      position={pointOfInterest.position}
      style={{
        transition: "all 0.2s",
        opacity: isOccluded ? 0 : 1,
      }}
    >
      <Marker
        shown={!pointOfInterestIsActive}
        onClick={() => {
          setActivePointOfInterest(pointOfInterest);
          animateCamera();
        }}
        name={pointOfInterest.icon}
      />
      {isNarrator && speak(pointOfInterest.description)}
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
