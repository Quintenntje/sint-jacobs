import React from "react";
import { Environment, Sky, Stars } from "@react-three/drei";
import { useDayNightStore } from "../store/dayNightStore";

const SceneLighting = () => {
  const isNight = useDayNightStore((state) => state.isNight);

  const daySky = {
    sunPosition: [100, 20, 100], // high, slightly to the side
    turbidity: 6, // some haze, not too washed out
    rayleigh: 3, // rich blue sky
    mieCoefficient: 0.003, // soft glow around sun
    mieDirectionalG: 0.9, // broad forward scattering
  };

  const nightSky = {
    sunPosition: [-50, -30, -50], // deep below horizon
    turbidity: 1.5, // very clear air
    rayleigh: 0.05, // almost no blue scattering
    mieCoefficient: 0.0005, // minimal atmospheric glow
    mieDirectionalG: 0.99, // very tight highlight if visible
  };

  return (
    <>
      <Sky
        sunPosition={isNight ? nightSky.sunPosition : daySky.sunPosition}
        turbidity={isNight ? nightSky.turbidity : daySky.turbidity}
        rayleigh={isNight ? nightSky.rayleigh : daySky.rayleigh}
        mieCoefficient={
          isNight ? nightSky.mieCoefficient : daySky.mieCoefficient
        }
        mieDirectionalG={
          isNight ? nightSky.mieDirectionalG : daySky.mieDirectionalG
        }
      />

      {isNight && (
        <Stars
          radius={300}
          depth={60}
          count={5000}
          factor={4}
          saturation={1}
          fade={false}
          speed={0}
        />
      )}

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
