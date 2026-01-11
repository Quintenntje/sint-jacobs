import React from "react";

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -92, 0]} receiveShadow>
      <circleGeometry args={[1000, 64]} />
      <meshStandardMaterial color="#353535" />
    </mesh>
  );
};

export default Floor;
