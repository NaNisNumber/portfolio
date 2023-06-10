import "./App.css";
import { Fragment } from "react";
import HeroSection from "./components/hero-section/HeroSection";
import { Navbar } from "./components/navbar/Navbar";
function App() {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />
    </Fragment>
  );
}

export default App;
