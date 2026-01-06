import React from "react";
import { Center } from "@react-three/drei";
import { Model } from "../../kerk";
import LimitedCameraControls from "../LimitedCameraControls";
import PointOfInterest from "../PointOfInterest/PointOfInterest";
import { useTourPlayingStore } from "../../store/tourPlayingStore";

const Experience = () => {
  const tourPlaying = useTourPlayingStore((state) => state.tourPlaying);
  return (
    <>
      <LimitedCameraControls />
      <Center>
        <Model />
      </Center>
      {tourPlaying && <PointOfInterest />}
    </>
  );
};

export default Experience;
