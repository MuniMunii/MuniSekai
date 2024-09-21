import React from "react";
import UnitListIntroduction from "../component/UnitListIntroduction";
import { useEffect, useState, useRef } from "react";
import { entryAnimation } from "../utils/utils";
import NewsComp from "../component/news";
import "../styles/animation.css";
import Footer from "../component/footer";
import ImageDisplay from "../component/imageDisplay";
import Loading from "../component/loading";
function Index() {
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  return (
    <>
      <ImageDisplay
        setIsVideoLoading={setIsVideoLoading}
        setIsError={setIsError}
      />
      {isVideoLoading ? (
        <Loading isVideoLoading={isVideoLoading} isError={isError} />
      ) : (
        <>
        {/* unitlist */}
            <UnitListIntroduction />
            {/* news */}
            <NewsComp />
            {/* i remove this because ugly */}
            {/* <GameplayInfo /> */}
            {/* footer */}
            <Footer />
        </>
      )}
    </>
  );
}
export default Index;
