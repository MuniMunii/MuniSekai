import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import '../styles/animation.css'
function UnitComp() {
  const [isIntro, setIsIntro] = useState(true);
  const [unitValue,setUnitValue]=useState([])
  console.log(unitValue);
  const [removeIntro, setRemoveIntro] = useState(false);
  const Location = useLocation();
  const pathUnit = Location.pathname.split("/")[2];
  const dataUnit = Location.state?.dataUnit;
  console.log(dataUnit);
  
  // useEffect buat Nyimpen data di state unitValue
  // this useEffect is for saving data value into unitValue state
  useEffect(()=>{
    const unitCharacters = dataUnit.Char[0];
    const charactersList =Object.keys(unitCharacters).map((charName) => {
      const detailunitValue = unitCharacters[charName]
      return detailunitValue
    });
    setUnitValue(charactersList)
  },[dataUnit])
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

  return (
    <>
    {/* // animation curtain */}
      <div
        className={`bg-slate-200 fixed w-screen h-screen transition-all duration-1000 ${
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
      </div>
      {/* // main Content */}
      <div
        className={`h-screen w-screen bg-no-repeat bg-full`}
        style={{
          backgroundImage: `url(${require("../assets/Unit/" +
            dataUnit.ThemeBg)})`,
        }}
      >
        <p>this is {dataUnit.groupName}</p>
      </div>
    </>
  );
}
export default UnitComp;
