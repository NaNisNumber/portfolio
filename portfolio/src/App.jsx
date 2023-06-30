import "./App.css";
import { Fragment, useState } from "react";
import Home from "./pages/Home";
import AboutProject from "./pages/AboutProject";
import SharedComponents from "./shared-components/SharedComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [currentScrollLocation, setCurrentScrollLocation] = useState();
  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route
            path="/"
            element={
              <SharedComponents
                setCurrentScrollLocation={setCurrentScrollLocation}
              />
            }
          >
            <Route
              index
              element={
                <Home
                  currentScrollLocation={currentScrollLocation}
                  setCurrentScrollLocation={setCurrentScrollLocation}
                />
              }
            />
            <Route
              path={`/about-project/${projectIndex}`}
              element={<AboutProject />}
            ></Route>
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
