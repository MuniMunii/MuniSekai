import React from "react";
import { DATA_SEKAI } from "../utils/data";
import { mouseEnterAndLeaveEffect,entryAnimation } from "../utils/utils";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
  function UnitList() {
    useEffect(()=>{
        entryAnimation(".unit-list", "show-unit");
        entryAnimation(".unit-zoom", "entry-animation");
      },[])
    const unitArray = Object.entries(...DATA_SEKAI).map(([key, value]) => {
      const bundleDelay =
        "[&:nth-child(1)]:delay-[75ms] [&:nth-child(2)]:delay-[100ms] [&:nth-child(3)]:delay-[150ms] [&:nth-child(4)]:delay-[200ms] [&:nth-child(5)]:delay-[250ms]";
      return (
        <NavLink to={`/${value.id}`} key={value.id}>
        <li
          onMouseEnter={(event) =>
            mouseEnterAndLeaveEffect(event, ".unit-image", "entry-animation")
          }
          onMouseLeave={(event) =>
            mouseEnterAndLeaveEffect(event, ".unit-image", "entry-animation")
          }
          className={`unit-list opacity-0 -translate-x-full transition-all ${bundleDelay} duration-1000 relative mt-7 mx-3 w-28 h-60  mb-14 group cursor-pointer select-none`}
        >
          
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
                  className="filter-none relative z-10 my-4 pointer-events-none"
                />
              </div>
            </div>
          
          <img
            src={`${require("../assets/Unit/" + value.LogoText)}`}
            loading="lazy"
            className="unit-image absolute opacity-0 -translate-y-full transition-all delay-100"
          ></img>
        </li>
        </NavLink>
      );
    });
    return (<ul className="flex justify-center flex-wrap self-center">{unitArray}</ul>);
  }
export default UnitList