import React from "react";
import { Center } from "@react-three/drei";
import { Model } from "../Model/Church";
import LimitedCameraControls from "../LimitedCameraControls";
import PointOfInterest from "../PointOfInterest/PointOfInterest";
import { useTourPlayingStore } from "../../store/tourPlayingStore";
import Floor from "../Model/Floor";

const Experience = () => {
  const tourPlaying = useTourPlayingStore((state) => state.tourPlaying);
  return (
    <>
      <LimitedCameraControls />
      <Center>
        <Model />
      </Center>

      <Floor />

      {tourPlaying && <PointOfInterest />}
    </>
  );
};

export default Experience;
