import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/animation.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, EffectFade, Navigation } from "swiper/modules";
// import 'swiper/swiper-bundle.min.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/swiperExtend.css";
import { DATA_SEKAI } from "../utils/data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function UnitComp() {
  const [isIntro, setIsIntro] = useState(true);
  // value for each character in group Unit
  const [unitValue, setUnitValue] = useState([]);
  const [testValue, setTestValue] = useState([]);
  const [removeIntro, setRemoveIntro] = useState(false);
  let paginationRef = useRef(null);
  const Location = useLocation();
  const pathUnit = Location.pathname.split("/")[2];
  console.log(pathUnit);
  console.log(testValue);
  // useEffect(()=>{
  //   const addClassIntoSwiper=()=>{
  //     const getSwiperPagination=document.querySelector('.swiper-pagination')
  //     if(getSwiperPagination){
  //     getSwiperPagination.classList.add('my-auto!important')
  //     }
  //   }
  //   const timer=setTimeout(addClassIntoSwiper,100)
  //   return ()=>clearTimeout(timer)
  // },[])
  useEffect(() => {
    const filterGroup = Object.entries(...DATA_SEKAI).find(
      ([key, unit]) => unit.id === pathUnit
    );
    const unitObject = Object.values(filterGroup[1].Char);
    const filterUnitChar = Object.values(unitObject[0]).flat();
    setUnitValue(filterUnitChar);
    setTestValue(filterGroup[1]);
  }, [pathUnit]);
  // useEffect(() => {
  //   const unitCharacters = dataUnit.Char[0];
  //   const charactersList = Object.keys(unitCharacters).map((charName) => {
  //     const detailunitValue = unitCharacters[charName];
  //     return detailunitValue;
  //   });
  //   setUnitValue(charactersList);
  // }, [dataUnit]);
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
    const EachCharacter = unitValue.map((char, index) => {
      return (
        <SwiperSlide
          key={`Char-${char.id}`}
          className="slide-content swiper-no-swiping"
        >
          <div className="h-full w-full flex justify-end  bg-transparent">
            <div className="w-[80%] max-w-[1000px] flex">
              <div className="swiper-button-next self-center justify-self-center h-fit cursor-pointer transition-color duration-200 text-black hover:text-slate-300 w-fit text-5xl font-light">
                <IoIosArrowBack />
              </div>
              <div className="p-4 w-full text-black flex justify-between">
                <div className="w-1/2 h-full font-Poppins">
                  <div className="text-left p-2 uppercase tracking-wider border-b border-b-black flex flex-col gap-2">
                    <h1 style={{color:char.Color}} className="text-7xl font-light w-fit relative pl-2 border-l border-l-slate-900 before:size-1 before:-left-[2px] before:absolute before:bg-white before:rounded-full after:rounded-full after:bottom-0 after:size-1 after:absolute after:bg-white after:-left-[2px]">
                      {char.id}
                    </h1>
                    <p className="bg-blue-500 p-1 text-white w-fit font-semibold">
                      {char.fullName}
                    </p>
                    <p className="bg-themeGreen p-1 w-fit">Birthday: <span className="text-white font-semibold">{char.birthday}</span></p>
                  </div>
                  <p className="text-justify text-black font-kanit p-1 mt-2 text-sm">{char.selfDesc}</p>
                </div>
                <div className="w-1/2 h-full flex items-end justify-center relative">
                <img src={require('../assets/char/new/'+char.image)} alt={`char-${char.id}-bnw`} className="w-[80%] h-[90%] bg-contain"/>
                </div>
              </div>
              <div className="swiper-button-prev self-center justify-self-center h-fit cursor-pointer transition-color duration-200 text-black hover:text-slate-300 w-fit text-5xl font-light">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
    const classBullet = `pagination-bullet rounded-full border-2 border-slate-200/40 hover:border-white duration-300 transition-color cursor-pointer select-none p-1 justify-center flex items-center`;
    const classBulletActive = `bullet-active !border-themeGreen scale-110`;
    const renderBulletTest = (index, className) => {
      if (unitValue && unitValue[index]) {
        const iconPath = require(`../assets/char/icon/` +
          unitValue[index].icon);
        return `<span class='${className}'><img class='size-16 rounded-full border-white border-2' src='${iconPath}' alt='${unitValue[index].id}-icon'></img></span>`;
      }
      return `<span class='${className}'>...</span>`;
    };
    return (
      <div
        className={`w-screen h-full overflow-y-auto overflow-x-hidden bg-black relative justify-center items-center flex select-none bg-cover z-10 after:backdrop-blur-sm after:block after:absolute after:w-full after:h-full`}
        style={{
          // backgroundImage:testValue.ThemeBgAlt?`url(${require('../assets/room/'+testValue.ThemeBgAlt)})`:'bg-white',
          backgroundImage:`url(${require('../assets/room/'+'bg2.png')})`,
        }}
      >
        <Swiper
          speed={300}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          lazy={{ loadPrevNext: true }}
          noSwiping={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            horizontalClass: "swiper-pagination-horizontal",
            bulletClass: classBullet,
            bulletActiveClass: classBulletActive,
            clickable: true,
            renderBullet: renderBulletTest,
          }}
          modules={[Pagination, EffectFade, Navigation]}
          className="flex flex-row-reverse h-[400px] w-[80%] p-10"
        >
          <div className="swiper-pagination my-auto z-10">{EachCharacter}</div>
        </Swiper>
      </div>
    );
  }
  return (
    <>
      <IntroEachCharacters />
    </>
  );
}
export default UnitComp;
