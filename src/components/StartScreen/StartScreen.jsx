import React from "react";
import "./startScreen.css";
import Button from "../Button/Button";
import { useTourPlayingStore } from "../../store/tourPlayingStore";
import { useProgress } from "@react-three/drei";

const StartScreen = () => {
  const startTour = useTourPlayingStore((state) => state.startTour);
  const { progress } = useProgress();

  return (
    <div className="start-screen">
      <div className="start-screen__content">
        <h1>Sint-Jacobs kerk</h1>
        <p>Interactieve tour van de kerk van Sint-Jacobs</p>
        <Button onClick={() => startTour()} loading={progress < 100}>
          Start de ervaring
        </Button>
      </div>
    </div>
  );
};

export default StartScreen;
