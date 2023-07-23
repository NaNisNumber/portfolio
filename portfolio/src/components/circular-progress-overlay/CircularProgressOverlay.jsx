import React from "react";
import "./CircularProgressOverlay.scss";

import CircularProgress from "@mui/material/CircularProgress";

const CircularProgressOverlay = () => {
  return (
    <div className="portfolio__circular-progress-overlay-container">
      <div className="portfolio__circular-progress-overlay">
        <CircularProgress color="secondary" />;
      </div>
    </div>
  );
};

export default CircularProgressOverlay;
