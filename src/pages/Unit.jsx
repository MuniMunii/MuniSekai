import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/animation.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, EffectFade,Navigation } from "swiper/modules";
// import 'swiper/swiper-bundle.min.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../styles/swiperExtend.css"
import { DATA_SEKAI } from "../utils/data";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

function UnitComp() {
  const [isIntro, setIsIntro] = useState(true);
  // value for each character in group Unit
  const [unitValue, setUnitValue] = useState([]);
  const [testValue, setTestValue] = useState([]);
  const [removeIntro, setRemoveIntro] = useState(false);
  let paginationRef=useRef(null)
  const Location = useLocation();
  const pathUnit = Location.pathname.split("/")[2];
  console.log(pathUnit);
  console.log(testValue)
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
        <SwiperSlide key={`Char-${char.id}`} className="slide-content swiper-no-swiping">
          <div className="h-full w-full flex justify-end  bg-transparent">
            <div className="w-[80%] flex">
            <div className="swiper-button-next self-center justify-self-center h-fit cursor-pointer text-slate-300/60 hover:text-white w-fit text-5xl font-light"><IoIosArrowBack/></div>
            <div className="p-4 w-full">
            {char.id}
            {char.hobbies}
            {char.hobbies}
            {char.hobbies}
            {char.hobbies}
            {char.hobbies}
            </div>
            <div className="swiper-button-prev self-center justify-self-center h-fit cursor-pointer text-slate-300/60 hover:text-white w-fit text-5xl font-light"><IoIosArrowForward/></div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
    const classBullet = `pagination-bullet rounded-full border-2 border-slate-200/40 hover:border-white duration-200 transition-color cursor-pointer select-none p-1 justify-center flex items-center`;
    const classBulletActive=`bullet-active !border-themeGreen`
    const renderBulletTest = (index, className) => {
      if (unitValue && unitValue[index]) {
        const iconPath=require(`../assets/char/icon/`+unitValue[index].icon)
        return `<span class='${className}'><img class='size-16 rounded-full border-white border-2' src='${iconPath}' alt='${unitValue[index].id}-icon'></img></span>`
      }
      return `<span class='${className}'>...</span>`;
    };
    return (
      <div className={`w-screen h-screen bg-white relative justify-center items-center flex select-none bg-cover`} style={{backgroundImage:testValue.ThemeBgAlt?`url(${require('../assets/room/'+testValue.ThemeBgAlt)})`:''}}>
        <Swiper
          speed={300}
          effect="fade"
          fadeEffect={{crossFade:true}}
          loop={true}
          lazy={{ loadPrevNext: true }}
          noSwiping={true}
          navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev'}}
          pagination={{
            currentClass:'test',
            horizontalClass:'swiper-pagination-horizontal',
            bulletClass: classBullet,
            bulletActiveClass:classBulletActive,
            clickable: true,
            renderBullet: renderBulletTest,
          }}
          modules={[Pagination, EffectFade,Navigation]}
          className="flex flex-row-reverse h-[70%] w-[80%] p-10"
        >
          <div className='swiper-pagination my-auto'>
          {EachCharacter}
          </div>
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
