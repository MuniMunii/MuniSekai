import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/animation.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
// import 'swiper/swiper-bundle.min.css';
import "swiper/css";
import "swiper/css/pagination";
function UnitComp() {
  const [isIntro, setIsIntro] = useState(true);
  // value for each character in group Unit
  const [unitValue, setUnitValue] = useState([]);
  console.log(unitValue);
  const [removeIntro, setRemoveIntro] = useState(false);
  const Location = useLocation();
  const pathUnit = Location.pathname.split("/")[2];
  // value untuk group unit
  // value for unit group
  const dataUnit = Location.state?.dataUnit;
  // useEffect(() => {
  //   document.body.style.overflow = "hidden !important";
  // }, []);
  // useEffect buat Nyimpen data di state unitValue
  // this useEffect is for saving data value into unitValue state
  useEffect(() => {
    const unitCharacters = dataUnit.Char[0];
    const charactersList = Object.keys(unitCharacters).map((charName) => {
      const detailunitValue = unitCharacters[charName];
      return detailunitValue;
    });
    setUnitValue(charactersList);
  }, [dataUnit]);
  useEffect(() => {
    console.log(pathUnit);
    setIsIntro(true);
    setRemoveIntro(false);
    const TWO_SECOND = 2000;
    const timer = setTimeout(() => {
      // test
      setIsIntro(false);
      const ONE_SECOND = 1000;
      const removeIntroTimer = setTimeout(() => {
        setRemoveIntro(true);
      }, ONE_SECOND);
      return () => clearTimeout(removeIntroTimer);
    }, TWO_SECOND);
    return () => {
      clearTimeout(timer);
    };
  }, [pathUnit]);
  function IntroEachCharacters() {
    const EachCharacter = unitValue.flat().map((char, index) => {
      const NestedSwiper = () => {
        return (
          <Swiper
            // speed={300}
            loop={true}
            // preventClicks={true}
            pagination={{ type: "progressbar", clickable: true }}
            modules={[Pagination]}
            className="mySwiper mySwiper-Nest-Unit h-screen w-screen"
          >
            <SwiperSlide>
              <div
                className="size-full relative bg-no-repeat flex justify-center items-center py-4 "
                style={{
                  backgroundImage: `url(${require("../assets/room/" +
                    char.bgRoom)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="w-[70vw] h-[350px] max-md:h-[250px] rounded-md relative overflow-hidden p-3 flex justify-start items-start"
                  style={{
                    background: `linear-gradient(120deg, rgba(255, 255, 255, 0.3), ${char.Color})`,
                  }}
                >
                  <div className="p-2 flex flex-col justify-start z-20">
                    <div className=" bg-white w-72 text-left text-wrap text-sm flex justify-start items-center">
                      <p className="pl-1 pr-3 border-r w-16 text-wrap border-r-slate-500">
                        Hobbies
                      </p>
                      <p className="px-1">{char.hobbies.join(", ")}</p>
                    </div>
                    <div className=" bg-white w-72 text-left text-wrap text-sm flex justify-start items-center">
                      <p className="pl-1 pr-3 border-r w-16 text-wrap border-r-slate-500">
                        Specialty
                      </p>
                      <p className="px-1">{char.specialty.join(", ")}</p>
                    </div>
                    <div className=" bg-white w-72 text-left text-wrap text-sm flex justify-start items-center">
                      <p className="pl-1 pr-3 border-r w-16 text-wrap border-r-slate-500">
                        Liked Food
                      </p>
                      <p className="px-1">{char.likedFood.join(", ")}</p>
                    </div>
                    <div className=" bg-white w-72 text-left text-wrap text-sm flex justify-start items-center">
                      <p className="pl-1 pr-3 border-r w-16 text-wrap border-r-slate-500">
                        Dislikes
                      </p>
                      <p className="px-1">{char.dislikes.join(", ")}</p>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    className="absolute -left-20 -bottom-7 h-full w-72 scale-75 z-10"
                    src={`${require("../assets/char/" + char.image)}`}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full text-xs flex justify-end px-2 z-[70]"
                    style={{ backgroundColor: dataUnit.Theme }}
                  >
                    {dataUnit.groupName}
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-screen h-screen bg-pink-400">
                pagination progress success
              </div>
            </SwiperSlide>
          </Swiper>
        );
      };
      return <SwiperSlide key={char.id}>{NestedSwiper}</SwiperSlide>;
    });
    return (
      <Swiper
        nested={true}
        speed={500}
        direction={"vertical"}
        lazy={{ loadPrevNext: true }}
        modules={[Mousewheel]}
        mousewheel={{ forceToAxis: true }}
        className="mySwiper mySwiper-Unit h-screen"
      >
        {EachCharacter}
      </Swiper>
    );
  }
  return (
    <>
      {/* // animation curtain */}
      {/* <div
        className={`bg-slate-200 fixed w-screen overflow-auto h-screen transition-all duration-1000 bg-no-repeat z-[99] ${
          isIntro ? "opacity-100 translate-y-0" : "-translate-y-full"
        } block ${
          removeIntro ? "hidden" : ""
        } flex flex-col justify-center items-center`}
        style={{ backgroundColor: dataUnit.Theme }}
      >
        <img
          src={`${require("../assets/Unit/" + dataUnit.LogoText)}`}
          alt="logo-pjsk"
          className="w-fit h-fit animate-bounce"
        />
      </div> */}
      {/* // main Content */}
      <IntroEachCharacters />
      <style jsx>{`
        .mySwiper .swiper-pagination-progressbar-fill {
          background-color: ${dataUnit.Theme} !important;
        }
      `}</style>
    </>
  );
}
export default UnitComp;
