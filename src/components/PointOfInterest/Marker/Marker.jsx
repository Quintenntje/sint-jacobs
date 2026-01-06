import React from "react";
import * as icons from "lucide-react";
import "./marker.css";

const Marker = ({ name, onClick }) => {
  const Icon = icons[name];

  if (!Icon) return null;

  return (
    <div className="marker" onClick={onClick}>
      <Icon />
    </div>
  );
};

export default Marker;
