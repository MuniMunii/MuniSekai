import React from "react";
import { useEffect } from "react";
import "../styles/root.css";
import { DATA_SEKAI } from "../utils/data";
import { CiMusicNote1 } from "react-icons/ci";
import "../styles/unitlist.css";
import Index from "../pages";
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
    const unitArray = Object.entries(...DATA_SEKAI).map(([key, value],index,array) => {
      const Delay=['75','100','150','200',"0"]
      const delayClass = index === array.length - 1 ? "250" :  Delay[index % Delay.length]
      console.log(index === array.length - 1);
        return (
        <li key={value.id} 
        onMouseEnter={unitListEffect}
        onMouseLeave={unitListEffect}
        className={`unit-list ichika opacity-0 -translate-x-full transition-all delay-${delayClass} [&:nth-child(5)]:delay-[250ms] duration-1000 relative mt-7 mx-3 w-28 h-60 hover:mb-10 `}>
          <a>
              <div
                className="w-full h-60 bg-slate-100 border-black border h rounded-t-xl flex flex-col justify-end items-end transition-transform duration-300 hover:-translate-y-3 bg-no-repeat bg-cover bg-center"
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
      )
    });
    console.log(unitArray);
    return unitArray
  }
  return (
    <>
      <div
        className={`w-full md:h-[600px] h-[900px] p-3 relative flex flex-col items-center justify-start bg-no-repeat bg-cover`}
        style={{
          backgroundImage: `url(${require("../assets/room/" + "bg.png")})`,
        }}
      >
        <div className="unit-zoom opacity-0 translate-y-full duration-500 transition-transform flex flex-col h-max">
          <p className="text-black text-3xl text-center">Sekai</p>
          {/* border bawah title / border under title */}
          <div className="flex justify-center items-center w-48 my-6 mx-auto"><div className="border border-t-black w-full"></div><div className=""><CiMusicNote1/></div><div className="border border-t-black w-full"></div></div>
          <p className="w-[80%] mx-auto"> each one formed from the feelings of people who are struggling to understand themselves. When the feelings of a person are realized, they will manifest in the SEKAI through a song. VIRTUAL SINGERS live in these worlds, with different appearances in each SEKAI, helping people discover their true feelings.</p>
        </div>
        <ul className="flex justify-center flex-wrap mb-14 self-center ">
          <UnitList/>
        </ul>
        <p className="w-[95%] absolute bottom-0 mb-4 unit-zoom opacity-0 translate-y-full duration-500 transition-transform">People can travel to their SEKAI by playing "Untitled" songs. These songs have no melody or lyrics and are created when a SEKAI is born. </p>
      </div>
    </>
  );
}
export default UnitListIntroduction;
