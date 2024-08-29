import React from "react";
import UnitListIntroduction from "../component/UnitListIntroduction";
import { useEffect,useState } from "react";
import { entryAnimation } from "../utils/utils";
import NewsComp from "../component/news";
function Index() {
  useEffect(() => {
    entryAnimation(".unit-list","show-unit");
    entryAnimation(".unit-zoom","zoom-entry");
    entryAnimation(".image-border","zoom-entry");
    entryAnimation(".news-list","zoom-entry");
  });
  return (
    <>
    <div className="w-full h-screen overflow-auto">
        <div className="w-full h-screen bg-pink-300"></div>
        <UnitListIntroduction />
    <NewsComp/>
    </div>
      
    </>
  );
}
export default Index;
