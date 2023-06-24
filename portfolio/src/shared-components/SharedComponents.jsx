import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const SharedComponents = ({ setCurrentScrollLocation }) => {
  return (
    <Fragment>
      <Navbar setCurrentScrollLocation={setCurrentScrollLocation} />
      <Outlet />
    </Fragment>
  );
};

export default SharedComponents;
