import React from "react";
import * as icons from "lucide-react";
import "./marker.css";

const Marker = ({ name }) => {
  const Icon = icons[name];

  if (!Icon) return null;

  return (
    <div className="marker">
      <Icon />
    </div>
  );
};

export default Marker;
