import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience/Experience";
import StartScreen from "./components/StartScreen/StartScreen";
import { useTourPlayingStore } from "./store/tourPlayingStore";
import InfoPanel from "./components/PointOfInterest/InfoPanel/InfoPanel";
import { useActivePointOfInterestStore } from "./store/activePointOfInterestStore";
import ActionsContainer from "./components/ActionsContainer/ActionsContainer";
import SceneLighting from "./components/SceneLighting";

const App = () => {
  const tourPlaying = useTourPlayingStore((state) => state.tourPlaying);
  const activePointOfInterest = useActivePointOfInterestStore(
    (state) => state.activePointOfInterest
  );

  return (
    <>
      <ActionsContainer />

      {!tourPlaying && <StartScreen />}

      {activePointOfInterest && (
        <InfoPanel pointOfInterest={activePointOfInterest} open={true} />
      )}

      <Canvas camera={{ position: [258, -21, 10] }}>
        <SceneLighting />
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
