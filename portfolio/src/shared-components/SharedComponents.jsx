import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
const SharedComponents = ({ setCurrentScrollLocation }) => {
  return (
    <Fragment>
      <Navbar setCurrentScrollLocation={setCurrentScrollLocation} />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default SharedComponents;
