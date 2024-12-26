import React, { useEffect } from "react";
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
function UnitComp() {
  const [isIntro, setIsIntro] = useState(true);
  // value for each character in group Unit
  const [unitValue, setUnitValue] = useState([]);
  const [testValue, setTestValue] = useState([]);
  const [removeIntro, setRemoveIntro] = useState(false);
  const Location = useLocation();
  const pathUnit = Location.pathname.split("/")[2];
  console.log(pathUnit);
  // value untuk group unit
  // value for unit group
  const dataUnit = Location.state?.dataUnit;
  useEffect(()=>{
    const addClassIntoSwiper=()=>{
      const getSwiperPagination=document.querySelector('.swiper-pagination')
      if(getSwiperPagination){
      getSwiperPagination.classList.add('my-auto!important')
      }
    }
    const timer=setTimeout(addClassIntoSwiper,100)
    return ()=>clearTimeout(timer)
  },[])
  useEffect(() => {
    const filterUnit = Object.entries(...DATA_SEKAI).find(
      ([key, unit]) => unit.id === pathUnit
    );
    const unitObject = Object.values(filterUnit[1].Char);
    const filterUnitChar = Object.values(unitObject[0]).flat();
    setUnitValue(filterUnitChar);
    setTestValue(filterUnit[1].Char);
  }, [pathUnit]);
  useEffect(() => {
    console.log(testValue);
    console.log(unitValue.map((char) => char.id));
  }, [testValue]);
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
          <div className="h-full w-full px-24 flex" style={{ backgroundColor: char.Color }}>
            <div className="swiper-button-next self-center justify-self-center w-14 h-fit cursor-pointer">next</div>
            <div className="p-4">
            {char.id}
            {char.hobbies}
            {char.hobbies}
            {char.hobbies}
            {char.hobbies}
            {char.hobbies}
            </div>
            <div className="swiper-button-prev self-center justify-self-center w-14 h-fit cursor-pointer">prev</div>
          </div>
        </SwiperSlide>
      );
    });
    const classBullet = `rounded-full size-10 border border-transparent cursor-pointer select-none p-8 justify-center flex items-center`;
    const renderBulletTest = (index, className) => {
      if (unitValue && unitValue[index]) {
        return `<span class='${className}'>${unitValue[index].id}</span>`
      }
      return `<span class='${className}'>Loading...</span>`;
    };
    return (
      <div className="w-screen h-screen relative bg-white justify-center items-center flex select-none">
        <Swiper
          speed={500}
          effect="fade"
          lazy={{ loadPrevNext: true }}
          noSwiping={true}
          navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev'}}
          pagination={{
            horizontalClass:'swiper-pagination-horizontal',
            bulletClass: classBullet,
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
