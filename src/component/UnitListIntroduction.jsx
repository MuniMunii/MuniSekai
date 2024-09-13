import React from "react";
import { useEffect } from "react";
import "../styles/root.css";
import { DATA_SEKAI } from "../utils/data";
import { CiMusicNote1 } from "react-icons/ci";
import Index from "../pages";
import { mouseEnterAndLeaveEffect } from "../utils/utils";
function UnitListIntroduction() {
  function UnitList() {
    const unitArray = Object.entries(...DATA_SEKAI).map(([key, value]) => {
      const bundleDelay =
        "[&:nth-child(1)]:delay-[75ms] [&:nth-child(2)]:delay-[100ms] [&:nth-child(3)]:delay-[150ms] [&:nth-child(4)]:delay-[200ms] [&:nth-child(5)]:delay-[250ms]";
      return (
        <li
          key={value.id}
          onMouseEnter={(event) =>
            mouseEnterAndLeaveEffect(event, ".unit-image", "entry-animation")
          }
          onMouseLeave={(event) =>
            mouseEnterAndLeaveEffect(event, ".unit-image", "entry-animation")
          }
          className={`unit-list opacity-0 -translate-x-full transition-all ${bundleDelay} duration-1000 relative mt-7 mx-3 w-28 h-60  mb-14 group`}
        >
          <a>
            <div
              className="w-full h-60 bg-slate-100 border-black border h rounded-t-xl flex flex-col justify-end items-end transition-transform duration-300 bg-no-repeat bg-cover bg-center group-hover:-translate-y-3"
              style={{
                backgroundImage: `url(${require("../assets/char/" +
                  value.LeadIMG)})`,
              }}
            >
              <div className="p-3 text-center w-full h-full"></div>
              <div className="w-full h-20 flex justify-center items-center relative border-transparent rounded-t-xl">
                <div className="w-full h-full absolute bg-black/50 inset-0 blur-lg"></div>
                <img
                  src={require("../assets/Unit/" + value.Logo)}
                  alt={value.Char}
                  className="filter-none relative z-10 my-4"
                />
              </div>
            </div>
          </a>
          <img
            src={`${require("../assets/Unit/" + value.LogoText)}`}
            className="unit-image absolute opacity-0 -translate-y-full transition-all delay-100"
          ></img>
        </li>
      );
    });
    console.log(unitArray);
    return unitArray;
  }
  return (
    <>
      <div
        className={`w-full h-min p-3 relative flex flex-col items-center justify-start bg-no-repeat bg-cover`}
        style={{}}
      >
        <div className="bg-slate-800 rounded-lg text-violet-50 p-4 z-0">
          <div className="unit-zoom opacity-0 translate-y-full duration-500 transition-transform flex flex-col h-max">
            <p className="text-black text-3xl text-center">Sekai</p>
            {/* border bawah title / border under title */}
            <div className="flex justify-center items-center w-48 my-6 mx-auto">
              <div className="border border-t-black w-full"></div>
              <div className="">
                <CiMusicNote1 />
              </div>
              <div className="border border-t-black w-full"></div>
            </div>
            <p className="w-[80%] mx-auto">
              {" "}
              each one formed from the feelings of people who are struggling to
              understand themselves. When the feelings of a person are realized,
              they will manifest in the SEKAI through a song. VIRTUAL SINGERS
              live in these worlds, with different appearances in each SEKAI,
              helping people discover their true feelings.
            </p>
          </div>
          <ul className="flex justify-center flex-wrap self-center ">
            <UnitList />
          </ul>
          <p className="w-[95%] text-center mx-auto mb-3 unit-zoom opacity-0 translate-y-full duration-500 transition-transform">
          People can travel to their SEKAI by playing "Untitled" songs. These
          songs have no melody or lyrics and are created when a SEKAI is born.{" "}
        </p>
        </div>
        
      </div>
    </>
  );
}
export default UnitListIntroduction;