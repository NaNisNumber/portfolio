import "./App.css";
import { Fragment } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/portfolio-website" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
