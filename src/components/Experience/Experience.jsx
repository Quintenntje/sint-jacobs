import React, { useEffect } from "react";
import { Center } from "@react-three/drei";
import { Model } from "../Model/Church";
import LimitedCameraControls from "../LimitedCameraControls";
import PointOfInterest from "../PointOfInterest/PointOfInterest";
import { useTourPlayingStore } from "../../store/tourPlayingStore";
import Floor from "../Model/Floor";
import useCameraAnimation from "../../animation/useCameraAnimation";
import { cameraDefaultPosition } from "../../lib/cameraPositions";

const Experience = () => {
  const tourPlaying = useTourPlayingStore((state) => state.tourPlaying);
  const animateCamera = useCameraAnimation(cameraDefaultPosition);

  useEffect(() => {
    if (tourPlaying) {
      animateCamera();
    }
  }, [tourPlaying, animateCamera]);

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
