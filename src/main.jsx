import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Experience from "./components/Experience/Experience";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas>
      <OrbitControls />
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Experience />
    </Canvas>
  </StrictMode>
);
