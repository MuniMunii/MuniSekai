import React from "react";
import { DATA_SEKAI } from "../utils/data";
import { Link,NavLink } from "react-router-dom";
function UnitListTest() {
  const DataMap = Object.entries(...DATA_SEKAI).map(([key, value]) => {
    return (
        <NavLink state={{ dataUnit: value }} key={value.id} to={`unit/${value.id}`} className={`w-[20%] hover:w-1/2 desktop:h-screen h-fit group cursor-pointer py-4 px-2 flex flex-col items-center transition-all relative duration-250 text-wrap`} style={{ backgroundColor: `${value.Theme}`}}>
        <div className="absolute left-0 top-0 w-full h-full bg-black/40 group-hover:bg-transparent transition-colors"></div>
          <img
            src={require("../assets/Unit/" + value.LogoText)}
            alt={value.Char}
            className="filter-none relative z-10 h-[15%]  pointer-events-none"
          />
          <img
            src={require("../assets/Unit/" + value.Logo)}
            alt={value.Char}
            className="filter-none relative z-10  pointer-events-none"
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
