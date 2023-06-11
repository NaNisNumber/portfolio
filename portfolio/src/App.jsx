import "./App.css";
import { Fragment } from "react";
import Home from "./pages/Home";
import SharedComponents from "./shared-components/SharedComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/portfolio-website" element={<SharedComponents />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
