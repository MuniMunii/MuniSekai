import React from "react";
import UnitListIntroduction from "../component/UnitListIntroduction";
import { useEffect, useState } from "react";
import { entryAnimation } from "../utils/utils";
import NewsComp from "../component/news";
import "../styles/animation.css";
import GameplayInfo from "../component/gameplayinfo";
import { parallaxedHoverEffext } from "../utils/utils";
import Navbar from "../component/navbar";
function Index() {
  useEffect(() => {
    entryAnimation(".unit-list", "show-unit");
    entryAnimation(".unit-zoom", "entry-animation");
    entryAnimation(".image-border", "entry-animation-x");
    entryAnimation(".news-list", "entry-animation-x");
    parallaxedHoverEffext();
  });
  return (
      <div className={`w-full overflow-hidden`}>
        <Navbar />
        <div className="w-full h-screen bg-pink-300"></div>
        <UnitListIntroduction />
        <NewsComp />
        <GameplayInfo />
      </div>
  );
}
export default Index;
