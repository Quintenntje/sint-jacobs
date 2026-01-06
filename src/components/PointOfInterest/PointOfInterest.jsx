import React from "react";
import PointsOfInterests from "../../lib/PointsOfInterests";
import Marker from "./Marker/Marker";
import { Html } from "@react-three/drei";

const PointOfInterest = () => {
  return (
    <>
      {PointsOfInterests.map((pointOfInterest) => (
        <Html key={pointOfInterest.id} position={pointOfInterest.position}>
          <Marker name={pointOfInterest.icon} />
        </Html>
      ))}
    </>
  );
};

export default PointOfInterest;
