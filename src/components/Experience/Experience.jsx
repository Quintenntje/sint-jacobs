import React from "react";
import { Center } from "@react-three/drei";
import { Model } from "../../kerk";
import LimitedCameraControls from "../LimitedCameraControls";

const Experience = () => {
  return (
    <>
      {<LimitedCameraControls />}
      <Center>
        <Model />
      </Center>
    </>
  );
};

export default Experience;
