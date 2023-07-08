import React from "react";
import "./Overlays.scss";
import CircularProgressOverlay from "../components/circular-progress-overlay/CircularProgressOverlay";
const Overlays = ({ heroImgLoaded, location }) => {
  return (
    <div>
      {!heroImgLoaded && location.pathname === "/" && (
        <CircularProgressOverlay />
      )}
    </div>
  );
};

export default Overlays;
