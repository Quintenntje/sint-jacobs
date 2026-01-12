import { StrictMode, useEffect } from "react";
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
import { cameraStartPosition } from "./lib/cameraPositions";
import AppHint from "./components/AppHint/AppHint";
import NameContainer from "./components/NameContainer/NameContainer";

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

      {tourPlaying && (
        <>
          <AppHint /> <NameContainer />
        </>
      )}

      <Canvas camera={{ position: cameraStartPosition }}>
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
