import { useGSAP } from "@gsap/react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const useCameraAnimation = (position) => {
  const { camera } = useThree();

  const { contextSafe } = useGSAP();

  const animateCamera = contextSafe(() => {
    gsap.to(camera.position, {
      x: position[0],
      y: position[1],
      z: position[2],
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return animateCamera;
};

export default useCameraAnimation;
