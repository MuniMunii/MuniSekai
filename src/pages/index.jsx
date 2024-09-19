import React from "react";
import UnitListIntroduction from "../component/UnitListIntroduction";
import { useEffect, useState, useRef } from "react";
import { entryAnimation } from "../utils/utils";
import NewsComp from "../component/news";
import "../styles/animation.css";
import Footer from "../component/footer";
import ImageDisplay from "../component/imageDisplay";
import Loading from "../component/loading";
function Index({ isVideoLoading, setIsVideoLoading }) {
  useEffect(() => {
    entryAnimation(".unit-list", "show-unit");
    entryAnimation(".unit-zoom", "entry-animation");
    entryAnimation(".image-border", "entry-animation-x");
    entryAnimation(".news-list", "entry-animation-x");
    // effect buat component GameplayInfo
    // effect for GameplayInfo Component
    // parallaxedHoverEffext();
  }, []);
  return (
    <>
      <ImageDisplay setIsVideoLoading={setIsVideoLoading} />
      {isVideoLoading ? (
        <Loading isVideoLoading={isVideoLoading} />
      ) : (
        <div className="relative">
          <UnitListIntroduction />
          <NewsComp />
          {/* i remove this because ugly */}
          {/* <GameplayInfo /> */}
          <Footer />
        </div>
      )}
    </>
  );
}
export default Index;
