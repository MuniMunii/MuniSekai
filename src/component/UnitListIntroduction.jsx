import React, { useEffect } from "react";
import "../styles/root.css";
import { CiMusicNote1 } from "react-icons/ci";
import UnitList from "./unitList";
function UnitListIntroduction() {
  return (
    <>
      <div
      id="sekai-tag"
        className={`w-full h-min desktop:h-screen  relative flex flex-col items-center justify-start bg-no-repeat bg-cover`}
      >
        <div className="bg-gradient-to-br from-blue-400 to-blue-200 h-full text-black p-4 z-0">
          <div className="unit-zoom opacity-0 translate-y-full duration-500 transition-transform flex flex-col h-max">
            <p className="text-black text-7xl text-center tracking-wider font-serif ">Sekai</p>
            {/* border bawah title / border under title */}
            <div className="flex justify-center items-center w-48 my-6 mx-auto">
              <div className="border border-t-black w-full"></div>
              <div className="">
                <CiMusicNote1 />
              </div>
              <div className="border border-t-black w-full"></div>
            </div>
            {/*  */}
            <p className="w-[80%] mx-auto">
              {" "}
              each one formed from the feelings of people who are struggling to
              understand themselves. When the feelings of a person are realized,
              they will manifest in the SEKAI through a song. VIRTUAL SINGERS
              live in these worlds, with different appearances in each SEKAI,
              helping people discover their true feelings.
            </p>
          </div>
            <UnitList />
          <p className="w-[95%] text-center mx-auto mb-1 unit-zoom opacity-0 translate-y-full duration-500 transition-transform">
          People can travel to their SEKAI by playing "Untitled" songs. These
          songs have no melody or lyrics and are created when a SEKAI is born.{" "}
        </p>
        </div>
      </div>
    </>
  );
}
export default UnitListIntroduction;
