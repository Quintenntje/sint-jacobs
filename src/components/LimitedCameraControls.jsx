import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function LimitedCameraControls() {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.y = THREE.MathUtils.clamp(camera.position.y, -85, 400);
  });

  return (
    <OrbitControls
      maxPolarAngle={Math.PI}
      minPolarAngle={0}
      minDistance={2}
      maxDistance={300}
      target={[0, 0, 0]}
      enableDamping={true}
    />
  );
}
