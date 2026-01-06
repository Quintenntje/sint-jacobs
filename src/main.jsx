import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Experience from "./components/Experience/Experience";
import StartScreen from "./components/StartScreen/StartScreen";
import { useTourPlayingStore } from "./store/tourPlayingStore";
import InfoPanel from "./components/PointOfInterest/InfoPanel/InfoPanel";
import { useActivePointOfInterestStore } from "./store/ActivePointOfInterestStore";

const App = () => {
  const tourPlaying = useTourPlayingStore((state) => state.tourPlaying);
  const activePointOfInterest = useActivePointOfInterestStore(
    (state) => state.activePointOfInterest
  );

  return (
    <>
      {!tourPlaying && <StartScreen />}

      {activePointOfInterest && (
        <InfoPanel pointOfInterest={activePointOfInterest} isOpen={true} />
      )}

      <Canvas camera={{ position: [258, -21, 10] }}>
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Experience />
      </Canvas>
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
