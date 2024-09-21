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
const IndexComp=React.lazy(()=>import('./pages/index'))
function App() {
  const [isLandscapes, setIsLandscapes] = useState(null);

  useEffect(() => {
    matchWindowLandscapes(setIsLandscapes);
  }, []);
  const conditionalRender = isLandscapes ? (
    <>
      <Suspense fallback={<Loading/>}>
      <div className="App z-0 bg-gradient-to-tl from-white to-themeGreen">
      <Navbar />
        <Routes>
          <Route path={"/"} element={<IndexComp/>} />
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
