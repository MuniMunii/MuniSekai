import React from "react";
import { DATA_SEKAI } from "../utils/data";
import { hexToRGBA } from "../utils/utils";
import { Link, NavLink } from "react-router-dom";
function UnitListTest() {
  const DataMap = Object.entries(...DATA_SEKAI).map(([key, value]) => {
    return (
      <NavLink
        state={{ dataUnit: value }}
        key={value.id}
        to={`unit/${value.id}`}
        className={`bg-black/90 w-[20%] hover:w-1/2 desktop:h-screen h-full group cursor-pointer py-4 px-2 flex flex-col items-center transition-all relative duration-250 text-wrap`}
      >
        <div className="absolute left-0 top-0 w-full h-full blur-md group-hover:filter-none group-hover:bg-transparent transition-colors">
          <div
            className="relative flex flex-col py-4 items-center justify-end w-full h-full justify-self-start bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${require("../assets/Unit/" +
                value.ThemeBg)})`,
            }}
          >
            <img
          src={require("../assets/char/" + value.GroupIMG)}
          alt={value.Char}
          className="absolute top-[23%] w-[74%] h-[68%] pointer-events-none"
        />
            <div
              className="z-20 rounded-md w-[80%] h-[55%] sm:h-[40%] overflow-clip text-xs md:text-sm xl:text-base xl:p-2 p-1 font-Poppins "
              style={{ backgroundColor: hexToRGBA(value.Theme, 0.7) }}
            >
              <h1 className="text-white/80 font-bold tracking-wide">
                {value.groupName}
              </h1>
              <p className="italic text-white">"{value.Profile}"</p>
              <p>{value.Desc}</p>
            </div>
          </div>
        </div>
        <img
          src={require("../assets/Unit/" + value.LogoText)}
          alt={value.Char}
          className="filter-none relative w-auto  h-[15%]  pointer-events-none"
        />
        <img
          src={require("../assets/Unit/" + value.Logo)}
          alt={value.Char}
          className="filter-none relative pointer-events-none"
        />
      </NavLink>
    );
  });
  return (
    <>
      <div
        id="sekai-tag"
        className={`w-full h-screen desktop:h-screen bg-white relative flex`}
      >
        {DataMap}
      </div>
    </>
  );
}
export default UnitListTest;
