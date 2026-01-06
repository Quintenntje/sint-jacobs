import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Experience from "./components/Experience/Experience";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas camera={{ position: [258, -21, 10] }}>
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Experience />
    </Canvas>
  </StrictMode>
);
