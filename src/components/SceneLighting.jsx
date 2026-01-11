import React from "react";
import { Environment } from "@react-three/drei";
import { useDayNightStore } from "../store/dayNightStore";

const dayColor = "#87CEEB";
const nightColor = "#0b1026";

const SceneLighting = () => {
  const isNight = useDayNightStore((state) => state.isNight);

  return (
    <>
      <color attach="background" args={[isNight ? nightColor : dayColor]} />

      <Environment
        preset={isNight ? "night" : "city"}
        intensity={isNight ? 0.3 : 1}
      />

      <ambientLight intensity={isNight ? 0.15 : 0.5} />
      <pointLight
        position={[10, 10, 10]}
        intensity={isNight ? 0.4 : 1.2}
        color={isNight ? "#aaccff" : "#ffffff"}
      />
    </>
  );
};

export default SceneLighting;
