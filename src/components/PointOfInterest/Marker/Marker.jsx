import React from "react";
import * as icons from "lucide-react";
import "./marker.css";

const Marker = ({ name, onClick, shown }) => {
  const Icon = icons[name];

  if (!Icon) return null;

  return (
    <div className={`marker ${shown ? "shown" : "hidden"}`} onClick={onClick}>
      <Icon />
    </div>
  );
};

export default Marker;
