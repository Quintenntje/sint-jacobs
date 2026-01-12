import "./appHint.css";
import React from "react";
import appHints from "../../lib/appHints.js";
import * as icons from "lucide-react";

const AppHint = () => {
  return (
    <div className="app-hint">
      {appHints.map((hint) => {
        const Icon = icons[hint.icon];
        return (
          <div key={hint.id} className="app-hint__item">
            <Icon size={16} />
            <span>
              <strong>{hint.label}:</strong> {hint.description}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default AppHint;
