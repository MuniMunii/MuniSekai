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
                  className="w-[70vw] max-w-[700px] h-[350px] max-md:h-[250px] rounded-md flex flex-col relative overflow-hidden p-3 justify-start items-start font-Poppins"
                  style={{
                    background: `linear-gradient(120deg, rgba(255, 255, 255, 0.4), ${char.Color})`,
                  }}
                >
                  <div className="w-full flex justify-around items-center h-[75px]">
                    <img
                      loading="lazy"
                      src={`${require("../assets/char/linetextchar/" +
                        char.lineText)}`}
                      alt={`line-${char.id}`}
                      className={`size-full`}
                    />
                    <img
                      loading="lazy"
                      src={`${require("../assets/Unit/" + dataUnit.LogoText)}`}
                      alt={`logo-unit`}
                      className={`h-14 w-28`}
                    />
                  </div>
                  <div className="size-full flex flex-row-reverse">
                    {/* image */}
                    <div className="absolute bottom-0 left-10 z-0">
                      <img
                        loading="lazy"
                        src={`${require("../assets/char/new/" + char.image)}`}
                        alt={`img-char-${char.id}`}
                        className={`h-72 w-full max-md:h-52`}
                      />
                    </div>
                    {/* description each characters */}
                    <div className="grid gap-[1px] flex-col justify-start items-center text-xs lg:text-sm z-20 text-slate-800">
                      <div className="flex py-1 items-center justify-start bg-opacity-70 bg-slate-100 w-72 lg:w-full rounded-md">
                        <p className="px-1 flex items-center justify-center w-24 border-r-2 font-semibold  border-r-slate-500">
                          Hobbies
                        </p>
                        <p className="px-2 flex w-60 lg:w-72 justify-start text-left items-center">
                          {char.hobbies.join(", ")}
                        </p>
                      </div>
                      <div className="flex py-1 items-center justify-start bg-opacity-70 bg-slate-100 w-72 lg:w-full rounded-md">
                        <p className="px-1 flex items-center justify-center w-24 border-r-2 font-semibold  border-r-slate-500">
                          Specialty
                        </p>
                        <p className="px-2 flex w-60 lg:w-72 justify-start text-left items-center">
                          {char.specialty.join(", ")}
                        </p>
                      </div>
                      <div className="flex py-1 items-center justify-start bg-opacity-70 bg-slate-100 w-72 lg:w-full rounded-md">
                        <p className="px-1 flex items-center justify-center w-24 border-r-2 font-semibold  border-r-slate-500">
                          Dislikes
                        </p>
                        <p className="px-2 flex w-60 lg:w-72 justify-start text-left items-center">
                          {char.dislikes.join(", ")}
                        </p>
                      </div>
                      <div className="flex py-1 items-center justify-start bg-opacity-70 bg-slate-100 w-72 lg:w-full rounded-md">
                        <p className="px-1 flex items-center justify-center w-24 border-r-2 font-semibold  border-r-slate-500">
                          Liked Food
                        </p>
                        <p className="px-2 flex w-60 lg:w-72 justify-start text-left items-center">
                          {char.likedFood.join(", ")}
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full relative z-10">
                      <div className="absolute bottom-6 left-3 uppercase">
                        <h1 className="bg-indigo-950 px-1 text-white text-2xl font-kanit font-bold tracking-wider">{char.id}</h1>
                        <h1 className="text-white shadow-name text-sm">{char.fullName}</h1>
                      </div>
                    </div>
                  </div>
                  {/* footer card */}
                  <div
                    className={`w-full flex justify-end px-3 absolute bottom-0 left-0 text-white text-opacity-70 text-xs`}
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
