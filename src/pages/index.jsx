import React from "react";
import UnitListIntroduction from "../component/UnitListIntroduction";
import { useEffect, useState,useRef } from "react";
import { entryAnimation } from "../utils/utils";
import NewsComp from "../component/news";
import "../styles/animation.css";
import GameplayInfo from "../component/gameplayinfo";
import { parallaxedHoverEffext } from "../utils/utils";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import ImageDisplay from "../component/imageDisplay";
function Index() {

  useEffect(() => {
    entryAnimation(".unit-list", "show-unit");
    entryAnimation(".unit-zoom", "entry-animation");
    entryAnimation(".image-border", "entry-animation-x");
    entryAnimation(".news-list", "entry-animation-x");
    // effect buat component GameplayInfo
    // effect for GameplayInfo Component
    // parallaxedHoverEffext();
  },[]);

  return (
  <>
      <div className="relative">
        <ImageDisplay/>
        <UnitListIntroduction />
        <NewsComp />
        {/* i remove this because ugly */}
        {/* <GameplayInfo /> */}
        <Footer/>
      </div>
      </>
  );
}
export default Index;
