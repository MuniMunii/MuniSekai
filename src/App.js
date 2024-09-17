import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { matchWindowLandscapes } from "./utils/utils";
import RotatingPhone from "./component/rotatingPhone";
import { DATA_SEKAI } from "./utils/data";
import "../src/styles/root.css";
import Navbar from "./component/navbar";
import { Turn as Hamburger } from "hamburger-react";
function App() {
  const [isLandscapes, setIsLandscapes] = useState(null);
  useEffect(() => {
    matchWindowLandscapes(setIsLandscapes);
    console.log(DATA_SEKAI);
  }, []);
  const conditionalRender = isLandscapes ? (
    <>
      <Navbar />
      <div className="App z-0 bg-gradient-to-tl from-white to-themeGreen">
        <Routes>
          <Route path={"/"} element={<Index />} />
        </Routes>
      </div>
    </>
  ) : (
    <RotatingPhone />
  );
  return <>{conditionalRender}</>;
}

export default App;
