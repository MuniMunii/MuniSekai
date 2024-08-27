import React from "react";
import UnitListIntroduction from "../component/UnitListIntroduction";
import { useEffect,useState } from "react";
import { entryAnimation } from "../utils/utils";
import { matchWindowLandscapes } from "../utils/utils";
import RotatingPhone from "../component/rotatingPhone";
function Index() {
  useEffect(() => {
    entryAnimation(".unit-list","show-unit");
    entryAnimation(".unit-zoom","zoom-entry")
  },);
  return (
    <>
    <div className="w-full h-screen overflow-auto">
        <div className="w-full h-screen bg-pink-300"></div>
        <UnitListIntroduction />
    <div className="h-screen"></div>
    </div>
      
    </>
  );
}
export default Index;
