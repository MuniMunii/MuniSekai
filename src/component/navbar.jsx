import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { AccordionContent, Accordion, AccordionTitle } from "flowbite-react";
import { HashLink } from "react-router-hash-link";
import { DATA_SEKAI } from "../utils/data";
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlinePeopleAlt, MdPeopleAlt } from "react-icons/md";
import { TbWorldStar } from "react-icons/tb";
import { FaWifi } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { IoBatteryFullSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { hexToRGBA } from "../utils/utils";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setIsAnimation] = useState(false);
  const [render, setRender] = useState(false);
  // console.log(render);
  const [phoneAnimation, setPhoneAnimation] = useState(false);
  const [isOpenUnitPhone, setIsOpenUnitPhone] = useState(false);
  // console.log(isOpenUnitPhone);
  const [phoneUnitRender, setPhoneUnitRender] = useState(false);
  const Location = useLocation();
  const Dates = new Date();
  const Hours = Dates.getHours();
  const Minutes = Dates.getMinutes();
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  useEffect(() => {
    if (Location.hash) {
      const elementID = Location.hash.substring(1);
      const element = document.getElementById(elementID);
      // delay untuk debug nanti di remove jika sudah selesai
      // this setTimeout for debugging delay if i done i will removed it
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [Location]);
  // ini useEffect buat animasi curtainNavbar
  // this useEffect for curtainNavbar Animation
  useEffect(() => {
    // timer dan renderTimer ini berfungsi buat effect mounting dan unmount component contoh kaya di side bar
    // this timer and renderTimer for mounting and unmount component effect animation like sidebar
    let Timer;
    let renderTimer;
    let PhoneTimer;
    let renderPhoneTimer;
    if (isOpen) {
      Timer = setTimeout(() => {
        setIsAnimation(true);
      }, 10);
      setRender(true);
      document.body.style.overflow = "hidden";
      // render buat phone unitList
      // render for unitList in phone
      if (isOpenUnitPhone) {
        renderPhoneTimer = setTimeout(() => setPhoneUnitRender(true), 100);
        PhoneTimer = setTimeout(() => {
          setPhoneAnimation(true);
        }, 150);
      } else if (!isOpenUnitPhone) {
        setPhoneAnimation(false);
        renderPhoneTimer = setTimeout(() => {
          setPhoneUnitRender(false);
        }, 300);
      }
    } else if (!isOpen) {
      setIsAnimation(false);
      renderTimer = setTimeout(() => {
        setRender(false);
        // console.log("rendeer :" + render);
      }, 300);
      document.body.style.overflow = "auto";
    }
    return () => {
      clearTimeout(Timer);
      clearTimeout(renderTimer);
      clearTimeout(PhoneTimer);
      clearTimeout(renderPhoneTimer);
    };
  }, [isOpen, isOpenUnitPhone]);

  // scroll effect that will dissapear when scroll down and will appear when scroll up
  // scroll effect yang akan hilang kalo scroll kebawah dan tampil jika scroll ke atas
  // const logoRef = useRef(null);
  // const hamburgerRef = useRef(null);
  // let prevScrollPost = useRef(window.pageYOffset);
  // function navbarScrollEffect() {
  //   const currentScrollPost = window.pageYOffset;
  //   if (!isOpen) {
  //     if (prevScrollPost.current > currentScrollPost) {
  //       //effect scroll ke atas
  //       // scroll up effect
  //       if (logoRef.current) {
  //         logoRef.current.classList.add("opacity-100", "translate-y-0");
  //         logoRef.current.classList.remove("opacity-0", "-translate-y-full");
  //       }
  //       if (hamburgerRef.current) {
  //         hamburgerRef.current.classList.add("opacity-100", "translate-y-0");
  //         hamburgerRef.current.classList.remove(
  //           "opacity-0",
  //           "-translate-y-full"
  //         );
  //       }
  //     } else {
  //       //effect scroll ke bawah
  //       //scroll down effect
  //       if (logoRef.current) {
  //         logoRef.current.classList.add("opacity-0", "-translate-y-full");
  //         logoRef.current.classList.remove("opacity-100", "translate-y-0");
  //       }
  //       if (hamburgerRef.current) {
  //         hamburgerRef.current.classList.add("opacity-0", "-translate-y-full");
  //         hamburgerRef.current.classList.remove("opacity-100", "translate-y-0");
  //       }
  //     }
  //     prevScrollPost.current = currentScrollPost;
  //   }
  // }
  // ini useEffect buat handel scroll navbar
  // this useEffect for handling scroll effect on navbar
  // useEffect(() => {
  //   window.addEventListener("scroll", navbarScrollEffect);
  //   return () => {
  //     window.removeEventListener("scroll", navbarScrollEffect);
  //   };
  // }, []);

  function NavbarSide() {
    return (
      <>
        <div
          // ref={logoRef}
          className={`w-40 z-10 left-2 top-2 fixed right-2 cursor-pointer select-none translate-y-0 duration-300 pointer-events-auto ${
            isOpen ? "opacity-0" : "opacity-100"
          } transition-all`}
        >
          <img
            src={`${require("../assets/other/" + "Logo.png")}`}
            alt="logo-pjsk"
            className="w-fit h-fit"
          />
        </div>
        <div
          // ref={hamburgerRef}
          className="p-2 bg-slate-100 rounded-full z-[999] fixed top-2 right-2 opacity-100 translate-y-0 transition-all duration-300 pointer-events-auto"
        >
          <Hamburger toggle={setIsOpen} toggled={isOpen} />
        </div>
      </>
    );
  }
  const unitList = Object.entries(...DATA_SEKAI).map(([key, value]) => {
    return (
      <Link
        to={`unit/${value.id}`}
        state={{ dataUnit: value }}
        onClick={() => setIsOpen(false)}
        key={value.id}
        className="fold-shadow w-full h-32 py-2 flex flex-col justify-center items-center overflow-clip relative cursor-pointer mb-6 rounded-sm shadow-[6px_7px_20px_0px_#1a202c] hover:shadow-[6px_7px_20px_0px_white] transition-shadow"
        style={{ backgroundColor: value.Theme }}
      >
        <div className="absolute -top-7 -left-7 rotate-45 size-14 bg-gradient-to-br from-themeGreen to-white"></div>
        <img
          src={`${require("../assets/other/" + value.LineText)}`}
          alt=""
          className={`z-0 size-1/3 absolute top-8 right-0 origin-center pointer-events-none select-none opacity-65 rotate-45`}
        />
        <img
          src={`${require("../assets/Unit/" + value.LogoText)}`}
          alt=""
          className={`z-0 w-[60%] origin-center pointer-events-none select-none`}
        />
      </Link>
    );
  });
  return (
    <>
      {/* side navbar */}
      {render && (
        <div
          className={`${
            animation ? "opacity-100" : "opacity-0"
          } w-full flex justify-between bg-black/50 h-full fixed backdrop-blur-lg transition-all duration-500 z-[99] pointer-events-none`}
        >
          <div
            className={`${
              animation ? "translate-x-0" : "-translate-x-full"
            }  md:w-[65%] w-[50%] h-full pointer-events-auto select-none`}
          >
            <img
              src={`${require("../assets/other/" + "text_logo.webp")}`}
              alt="logo-pjsk"
              className={`w-[25vh] h-[97vh] m-2 filter-none pointer-events-none`}
            />
          </div>
          <div
            className={`${
              animation
                ? "translate-x-0 rotate-0"
                : "translate-x-full rotate-12"
            } md:w-[40%] w-[50%] h-full z-[999] overflow-auto bg-transparent text-wrap px-4 flex justify-center items-center py-6 transition-all ease-in-out duration-300 font-Poppins pointer-events-auto `}
          >
            <div
              className={`bg-slate-800 relative pt-2 rounded-xl flex flex-col justify-center items-center overflow-hidden w-[90%] h-[30em] desktop:h-full transition-all duration-300`}
            >
              {/* speaker phone accesories */}
              <div className="bg-black absolute top-0 w-14 h-3 rounded-xl flex justify-evenly items-center">
                <div className="bg-slate-400 size-1 rounded full"></div>
                <div className="bg-slate-400 size-1 rounded full"></div>
                <div className="bg-slate-400 size-1 rounded full"></div>
              </div>
              {/* button phone accesories */}
              <div className="flex flex-col absolute -left-1 bottom-[67%]">
                <div className="bg-slate-800 mb-3 h-9 w-2 rounded-lg"></div>
                <div className="bg-slate-800  h-9 w-2 rounded-lg"></div>
              </div>
              {/* button phone accesories */}
              <div className="bg-slate-800 absolute -right-1 h-16 w-2 bottom-[70%] rounded-lg"></div>
              {/* Main Interface */}
              <div className={`${!phoneUnitRender?'bg-white':''} h-[95%] w-[90%] rounded-md relative overflow-hidden`}>
                <div className="absolute top-0 w-full h-6 rounded-t-md bg-black/80 z-20 text-white/70 flex flex-row-reverse justify-between items-center px-4">
                  <p className="grow flex justify-center">{`${addZero(
                    Hours
                  )}:${addZero(Minutes)}`}</p>
                </div>
                {/* Back Button */}
                <div className="absolute bottom-0 w-full py-1 px-4 rounded-b-md bg-black/80 z-20 text-white/70 flex justify-center items-center ">
                  <p onClick={() => setIsOpenUnitPhone(false)} className="text-sm cursor-pointer hover:text-white">Home</p>
                </div>
                {/* unit interface */}
                {phoneUnitRender ? (
                  <>
                    <div
                      className={`${
                        phoneAnimation ? "translate-x-[1px]" : "translate-x-full"
                      } bg-slate-500 h-full w-full overflow-auto scrollbar-hidden flex flex-col items-center pt-8 px-3 pb-6 duration-200 transition-transform scroll-smooth`}
                    >
                      {unitList}
                    </div>
                  </>
                  // main navbar
                ) : (
                  <div className="h-full w-full overflow-auto scrollbar-hidden flex flex-col items-center flex-grow pt-8 px-3 pb-6">
                    <HashLink
                      smooth
                      to={"/#Sekai"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="bg-pink-400 group  w-full h-[125px] py-2 flex flex-col justify-center items-center overflow-clip relative cursor-pointer mb-6 rounded-sm shadow-[6px_7px_20px_0px_#1a202c]"
                    >
                      <div className="absolute -top-7 -left-7 rotate-45 size-14 bg-pink-500 overflow-clip"></div>
                      <img
                        src={`${require("../assets/other/" +
                          "sekai_text.png")}`}
                        alt=""
                        className={`z-0 size-full absolute pointer-events-none select-none opacity-45 `}
                      />
                      <TbWorldStar className="z-10 size-12 group-hover:text-slate-200 transition-all" />
                      <h1 className="z-10 text-black font-bold text-4xl select-none group-hover:text-slate-200 transition-all">
                        Sekai
                      </h1>
                    </HashLink>
                    <button
                      onClick={() => {
                        setIsOpenUnitPhone(true);
                      }}
                      className="bg-orange-400 group w-full h-[125px] py-2 flex flex-col justify-center overflow-clip items-center relative cursor-pointer mb-6 rounded-sm shadow-[6px_7px_20px_0px_#1a202c]"
                    >
                      <div className="absolute -top-7 -left-7 rotate-45 size-14 bg-orange-500 overflow-clip"></div>
                      <img
                        src={`${require("../assets/other/" + "unit_text.png")}`}
                        alt=""
                        className={`z-0 size-full absolute pointer-events-none select-none opacity-45 `}
                      />
                      <MdPeopleAlt className="z-10 size-12 group-hover:text-slate-200 transition-all" />
                      <h1 className="z-10 text-black font-bold text-4xl select-none group-hover:text-slate-200 transition-all ">
                        Unit
                      </h1>
                    </button>
                    <HashLink
                      smooth
                      to={"/#News"}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="bg-green-400 group w-full h-[125px] py-2 flex flex-col justify-center overflow-clip items-center relative cursor-pointer mb-6 rounded-sm shadow-[6px_7px_20px_0px_#1a202c]"
                    >
                      <div className="absolute -top-7 -left-7 rotate-45 size-14 bg-green-500 overflow-clip"></div>
                      <img
                        src={`${require("../assets/other/" + "news_text.png")}`}
                        alt=""
                        className={`z-0 size-full absolute pointer-events-none select-none opacity-45 `}
                      />
                      <FaRegNewspaper className="z-10 size-12 group-hover:text-slate-200 transition-all" />
                      <h1 className="z-10 text-black font-bold text-4xl select-none group-hover:text-slate-200 transition-all">
                        News
                      </h1>
                    </HashLink>
                    <div className="mx-auto flex flex-wrap justify-center max-w-fit">
                      <img
                        src={`${require("../assets/other/" + "appicon.png")}`}
                        alt="logo-pjsk"
                        className="w-32 m-2  relative filter-none cursor-pointer"
                      />
                      <img
                        src={`${require("../assets/other/" + "playicon.png")}`}
                        alt="logo-pjsk"
                        className="w-32 m-2  relative filter-none cursor-pointer"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {<NavbarSide />}
    </>
  );
}
export default Navbar;
