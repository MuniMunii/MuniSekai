import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Index from "./pages";
import React, { useState, useRef,lazy,Suspense } from "react";
import { useEffect } from "react";
import { matchWindowLandscapes } from "./utils/utils";
import RotatingPhone from "./component/rotatingPhone";
import "../src/styles/root.css";
import Navbar from "./component/navbar";
import Loading from "./component/loading";
import UnitComp from "./pages/Unit";
const IndexComp=React.lazy(()=>import('./pages/index'))
function App() {
  const [isLandscapes, setIsLandscapes] = useState(null);
  useEffect(() => {
    document.body.classList.add('scrollbar-hidden')
    document.body.style.overflow='auto'
    matchWindowLandscapes(setIsLandscapes);
  }, []);
  const conditionalRender = isLandscapes ? (
    <>
      <Suspense fallback={<Loading/>}>
      <Navbar />
      <div className="App z-0 bg-gradient-to-tl from-white to-themeGreen overflow-y-scroll">
        <Routes>
          <Route path={"/"} element={<IndexComp/>} />
          <Route path={"/unit/:unitId"} element={<UnitComp/>}/>
        </Routes>
      </div>
      </Suspense>
    </>
  ) : (
    <RotatingPhone />
  );
  return <>{conditionalRender}</>;
}

export default App;
