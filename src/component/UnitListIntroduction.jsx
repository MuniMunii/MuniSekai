import React from "react";
import { useEffect } from "react";
import "../styles/root.css";
import { DATA_SEKAI } from "../utils/data";
import { unitListAnimation } from "../utils/utils";
import "../styles/unitlist.css";
function UnitListIntroduction() {
  // function ini ngambil parameter dari event listener
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
  function UnitList(){
    const GetUnit=DATA_SEKAI.map((unit)=>{
      const { LEO, MMJ, VBS, WXS, NIJI } = unit;
      return (
        <ul className="flex justify-center flex-wrap mt-5">
          <li
            onMouseEnter={unitListEffect}
            onMouseLeave={unitListEffect}
            className="unit-list ichika opacity-0 -translate-x-full transition-all delay-75 duration-1000 relative  mt-7 mx-3 w-28 h-60 hover:mb-10 "
          >
            <a>
              <div className="w-full h-60 border-black border h rounded-t-xl flex flex-col justify-end items-end transition-transform duration-300 hover:-translate-y-3 bg-no-repeat bg-cover bg-center" style={{
              backgroundImage: `url(${require("../assets/char/" +
                "bnw_ichika.png")})`,
            }}>
                <div className="p-3 text-center w-full h-full"></div>
                <div className="w-full h-20 bg-white/10 flex justify-center items-center relative border-transparent rounded-t-xl">
                  <div className="w-full h-full absolute bg-white/50 inset-0 blur-lg"></div>
                  <img
                    src={require("../assets/Unit/" + LEO.Logo)}
                    className="filter-none relative z-10 my-4"
                  />
                </div>
              </div>
            </a>
            <img
              src={`${require("../assets/Unit/" + LEO.LogoText)}`}
              className="unit-image absolute opacity-0 -translate-y-full transition-all delay-100"
            ></img>
          </li>
          <li
            onMouseEnter={unitListEffect}
            onMouseLeave={unitListEffect}
            className="unit-list ichika opacity-0 -translate-x-full transition-all delay-75 duration-1000 relative  mt-7 mx-3 w-28 h-60 hover:mb-10 "
          >
            <a>
              <div className="w-full h-60 border-black border h rounded-t-xl flex flex-col justify-end items-end transition-transform duration-300 hover:-translate-y-3 bg-no-repeat bg-cover bg-center" style={{
              backgroundImage: `url(${require("../assets/char/" +
                "bnw_ichika.png")})`,
            }}>
                <div className="p-3 text-center w-full h-full"></div>
                <div className="w-full h-20 bg-white/10 flex justify-center items-center relative border-transparent rounded-t-xl">
                  <div className="w-full h-full absolute bg-white/50 inset-0 blur-lg"></div>
                  <img
                    src={require("../assets/Unit/" + MMJ.Logo)}
                    className="filter-none relative z-10 my-4"
                  />
                </div>
              </div>
            </a>
            <img
              src={`${require("../assets/Unit/" + MMJ.LogoText)}`}
              className="unit-image absolute opacity-0 -translate-y-full transition-all delay-100"
            ></img>
          </li>
          <li
            onMouseEnter={unitListEffect}
            onMouseLeave={unitListEffect}
            className="unit-list ichika opacity-0 -translate-x-full transition-all delay-75 duration-1000 relative  mt-7 mx-3 w-28 h-60 hover:mb-10 "
          >
            <a>
              <div className="w-full h-60 border-black border  rounded-t-xl flex flex-col justify-end items-end transition-transform duration-300 hover:-translate-y-3 bg-no-repeat bg-cover bg-center" style={{
              backgroundImage: `url(${require("../assets/char/" +
                "bnw_kohami.png")})`,
            }}>
                <div className="p-3 text-center w-full h-full"></div>
                <div className="w-full h-20 bg-white/10 flex justify-center items-center relative border-transparent rounded-t-xl">
                  <div className="w-full h-full absolute bg-white/50 inset-0 blur-lg"></div>
                  <img
                    src={require("../assets/Unit/" + VBS.Logo)}
                    className="filter-none relative z-10 my-4"
                  />
                </div>
              </div>
            </a>
            <img
              src={`${require("../assets/Unit/" + VBS.LogoText)}`}
              className="unit-image absolute opacity-0 -translate-y-full transition-all delay-100"
            ></img>
          </li>
          <li
            onMouseEnter={unitListEffect}
            onMouseLeave={unitListEffect}
            className="unit-list ichika opacity-0 -translate-x-full transition-all delay-75 duration-1000 relative  mt-7 mx-3 w-28 h-60 hover:mb-10 "
          >
            <a>
              <div className="w-full h-60 border-black border h rounded-t-xl flex flex-col justify-end items-end transition-transform duration-300 hover:-translate-y-3 bg-no-repeat bg-cover bg-center" style={{
              backgroundImage: `url(${require("../assets/char/" +
                "bnw_ichika.png")})`,
            }}>
                <div className="p-3 text-center w-full h-full"></div>
                <div className="w-full h-20 bg-white/10 flex justify-center items-center relative border-transparent rounded-t-xl">
                  <div className="w-full h-full absolute bg-white/50 inset-0 blur-lg"></div>
                  <img
                    src={require("../assets/Unit/" + WXS.Logo)}
                    className="filter-none relative z-10 my-4"
                  />
                </div>
              </div>
            </a>
            <img
              src={`${require("../assets/Unit/" + WXS.LogoText)}`}
              className="unit-image absolute opacity-0 -translate-y-full transition-all delay-100"
            ></img>
          </li>
          <li
            onMouseEnter={unitListEffect}
            onMouseLeave={unitListEffect}
            className="unit-list ichika opacity-0 -translate-x-full transition-all delay-75 duration-1000 relative  mt-7 mx-3 w-28 h-60 hover:mb-10 "
          >
            <a>
              <div className="w-full h-60 border-black border h rounded-t-xl flex flex-col justify-end items-end transition-transform duration-300 hover:-translate-y-3 bg-no-repeat bg-cover bg-center" style={{
              backgroundImage: `url(${require("../assets/char/" +
                "bnw_ichika.png")})`,
            }}>
                <div className="p-3 text-center w-full h-full"></div>
                <div className="w-full h-20 bg-white/10 flex justify-center items-center relative border-transparent rounded-t-xl">
                  <div className="w-full h-full absolute bg-white/50 inset-0 blur-lg"></div>
                  <img
                    src={require("../assets/Unit/" + NIJI.Logo)}
                    className="filter-none relative z-10 my-4"
                  />
                </div>
              </div>
            </a>
            <img
              src={`${require("../assets/Unit/" + NIJI.LogoText)}`}
              className="unit-image absolute opacity-0 -translate-y-full transition-all delay-100"
            ></img>
          </li>
        </ul>
      )
    })
    return GetUnit
  }
  return (
    <>
      <div className="w-full h-[800px] p-3 bg-yellow-100 flex flex-col items-center justify-start">
           <p className="text-black text-3xl text-center">Sekai</p>
           <UnitList/>
       </div>
    </>
  );
}
export default UnitListIntroduction;
