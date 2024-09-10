import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import {
  matchWindowLandscapes,
  isLandscapes,
  unitListAnimation,
} from "./utils/utils";
import RotatingPhone from "./component/rotatingPhone";
import { DATA_SEKAI } from "./utils/data";
import "../src/styles/root.css";
import Navbar from "./component/navbar";
function App() {
  const [isLandscapes, setIsLandscapes] = useState(null);
  useEffect(() => {
    matchWindowLandscapes(setIsLandscapes);
    console.log(DATA_SEKAI);
  }, []);
  const conditionalRender = isLandscapes ? (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Index />} />
      </Routes>
    </>
  ) : (
    <RotatingPhone />
  );
  return (
    <>
      <div className="App bg-slate-700">
{conditionalRender}
      </div>
    </>
  );
}

export default App;
