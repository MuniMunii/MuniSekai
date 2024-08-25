import React from "react";
import { useEffect } from "react";
import "../styles/root.css";
import { DATA_SEKAI } from "../utils/data";
import { unitListAnimation } from "../utils/utils";
import "../styles/unitlist.css";
function UnitListIntroduction() {
  useEffect(() => {
    unitListAnimation();
  }, []);
  function unitListEffect(event) {
    // ngambil class dari target yang di pencet
    const unitImage = event.currentTarget.querySelector(".unit-image");
    if (event.type === "mouseenter") {
      if (unitImage) {
        unitImage.classList.add("unit-image-animation");
      }
    } else if (event.type === "mouseleave") {
      if (unitImage) {
        unitImage.classList.remove("unit-image-animation");
      }
    }
  }
  function UnitList() {
    const getLogo = DATA_SEKAI.map((unit, index) => {
      const { LEO, MMJ, VBS, WXS, NIJI } = unit;
      return (
        <div
          className="flex justify-center relative flex-wrap "
          key={`unitlist-1`}
        >
          <div
            onMouseEnter={unitListEffect}
            onMouseLeave={unitListEffect}
            className="unit-list opacity-0 -translate-x-full transition-all delay-75 duration-1000 relative mt-4 mx-3 w-28 h-60 hover:mb-10"
          >
            <a>
              <div className="w-full h-60 border-black border h rounded-t-xl flex flex-col justify-end items-end">
                <div className="p-3 text-center w-full h-full">aaaa</div>
                <div className="w-full h-20 bg-white/30 blur-sm flex justify-center items-center">
                <img src={`${require("../assets/Unit/" + LEO.Logo)}`} className="filter-none"></img>
                </div>
              </div>
            </a>
            <img
              src={`${require("../assets/Unit/" + LEO.LogoText)}`}
              className="unit-image absolute opacity-0 -translate-y-full transition-all delay-100"
            ></img>
          </div>
          <div
            onMouseEnter={unitListEffect}
            onMouseLeave={unitListEffect}
            className="unit-list opacity-0 -translate-x-full transition-all delay-100 duration-1000 relative mt-4 mx-3 w-28 pb-3 h-60 hover:mb-10 "
          >
            <a>
              <div className="w-full h-60 p-3 border-black border h rounded-t-xl">
                <img src={`${require("../assets/Unit/" + MMJ.Logo)}`}></img>
              </div>
            </a>
            <img
              src={`${require("../assets/Unit/" + MMJ.LogoText)}`}
              className="unit-image opacity-0 -translate-y-full transition-all delay-100"
            ></img>
          </div>
          <div
            onMouseEnter={unitListEffect}
            onMouseLeave={unitListEffect}
            className="unit-list opacity-0 -translate-x-full transition-all delay-150 duration-1000 relative mt-4 mx-3 w-28 pb-3 h-60 hover:mb-10 "
          >
            <a>
              <div className="w-full h-60 p-3 border-black border h rounded-t-xl">
                <img src={`${require("../assets/Unit/" + VBS.Logo)}`}></img>
              </div>
            </a>
            <img
              src={`${require("../assets/Unit/" + VBS.LogoText)}`}
              className="unit-image opacity-0 -translate-y-full transition-all delay-100"
            ></img>
          </div>
          <div
            onMouseEnter={unitListEffect}
            onMouseLeave={unitListEffect}
            className="unit-list opacity-0 -translate-x-full transition-all delay-200 duration-1000 relative mt-4 mx-3 w-28 pb-3 h-60 hover:mb-10 "
          >
            <a>
              <div className="w-full h-60 p-3 border-black border h rounded-t-xl">
                <img src={`${require("../assets/Unit/" + WXS.Logo)}`}></img>
              </div>
            </a>
            <img
              src={`${require("../assets/Unit/" + WXS.LogoText)}`}
              className="unit-image opacity-0 -translate-y-full transition-all delay-100"
            ></img>
          </div>
          <div
            onMouseEnter={unitListEffect}
            onMouseLeave={unitListEffect}
            className="unit-list opacity-0 -translate-x-full transition-all delay-[250ms] duration-1000 relative mt-4 mx-3 w-28 pb-3 h-60 hover:mb-10 "
          >
            <a>
              <div className="w-full h-60 p-3 border-black border h rounded-t-xl">
                <img src={`${require("../assets/Unit/" + NIJI.Logo)}`}></img>
              </div>
            </a>
            <img
              src={`${require("../assets/Unit/" + NIJI.LogoText)}`}
              className="unit-image opacity-0 -translate-y-full transition-all delay-100"
            ></img>
          </div>
        </div>
      );
    });
    console.log(getLogo);
    return getLogo;
  }
  return (
    <>
      <div className="w-full h-40 overflow-auto p-3 bg-yellow-100">
        <div className="w-[80%] mx-auto ">
          <p className="text-black text-3xl text-center">Sekai</p>
          <UnitList />
        </div>
      </div>
    </>
  );
}
export default UnitListIntroduction;
