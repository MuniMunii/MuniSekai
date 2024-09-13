import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import {
  matchWindowLandscapes,
} from "./utils/utils";
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
      <Routes>
        <Route path={"/"} element={<Index />} />
      </Routes>
    </>
  ) : (
    <RotatingPhone />
  );
  return (
    <>
    
<div className="App z-0 overflow-hidden">
{conditionalRender}
</div>
    </>
  );
}

export default App;
