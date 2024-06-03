import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutProject from "./pages/AboutProject";
import SharedComponents from "./shared-components/SharedComponents";


function App() {
  const [currentScrollLocation, setCurrentScrollLocation] = useState();

  const [displayImg, setDisplayImg] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname != "/") {
      setDisplayImg(false);
    }
  }, [location.pathname]);

  return (
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
                setDisplayImg={setDisplayImg}
              />
            }
          />
          <Route path={`/about-project/:id`} element={<AboutProject />}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
