import React, { Fragment } from "react";
import "./Overlays.scss";
import CircularProgressOverlay from "../components/circular-progress-overlay/CircularProgressOverlay";
const Overlays = ({ displayImg, location }) => {
  /* displayImg for heroImg is initially false untill the img is loaded , so if there is !displayImg the progress
bar component will remain */

  return (
    <Fragment>
      {!displayImg && location.pathname === "/" && <CircularProgressOverlay />}
    </Fragment>
  );
};

export default Overlays;
