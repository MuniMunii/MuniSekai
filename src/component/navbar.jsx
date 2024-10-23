import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { AccordionContent, Accordion, AccordionTitle } from "flowbite-react";
import { HashLink } from "react-router-hash-link";
import { DATA_SEKAI } from "../utils/data";
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setIsAnimation] = useState(false);
  const [render, setRender] = useState(false);
  const Location = useLocation();
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
    if (isOpen) {
      Timer = setTimeout(() => {
        setIsAnimation(true);
      }, 100);
      setRender(true);
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      setIsAnimation(false);
      renderTimer = setTimeout(() => {
        setRender(true);
      }, 300);
      document.body.style.overflow = "auto";
    }
    return () => clearTimeout(Timer), clearTimeout(renderTimer);
  }, [isOpen]);

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
      >
        <li
          className={`font-semibold cursor-pointer mb-7 hover:underline flex items-center text-wrap `}
          style={{ color: value.Theme }}
        >
          <img
            src={`${require("../assets/Unit/" + value.Logo)}`}
            alt="logo-pjsk"
            className={`mr-1`}
          />{" "}
          {value.groupName.split(",")}
        </li>
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
            } md:w-[40%] w-[50%] h-full z-[999] overflow-auto bg-transparent text-wrap px-4 flex justify-center items-center py-6 transition-all duration-300 font-Poppins pointer-events-auto `}
          >
            <div
              className={`bg-slate-800 relative pt-2 rounded-xl flex flex-col justify-center items-center  w-[90%] h-full transition-all duration-300`}
            >
              <div className="bg-black absolute top-0 w-14 h-3 rounded-xl flex justify-evenly items-center">
                <div className="bg-slate-400 size-1 rounded full"></div>
                <div className="bg-slate-400 size-1 rounded full"></div>
                <div className="bg-slate-400 size-1 rounded full"></div>
              </div>
              <div className="flex flex-col absolute -left-1 bottom-[67%]">
                <div className="bg-slate-800 mb-3 h-9 w-2 rounded-lg"></div>
                <div className="bg-slate-800  h-9 w-2 rounded-lg"></div>
              </div>
              <div className="bg-slate-800 absolute -right-1 h-16 w-2 bottom-[70%] rounded-lg"></div>
              <div className="bg-white h-[95%] w-[90%] rounded-md relative">
                <div className="absolute top-0 w-full h-6 rounded-t-md bg-black/70"></div>
                <div className="h-full w-full overflow-auto scrollbar-hidden flex flex-col">
                  {/* content */}
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className={`${
              animation ? "translate-x-0 rotate-0" : "translate-x-full rotate-12"
            } md:w-[35%] w-fit h-[95%] z-[999] overflow-auto rounded-md bg-black text-wrap px-8 flex flex-col justify-between py-6 transition-all duration-300 font-Poppins pointer-events-auto scrollbar-hidden`}
          >
            <div className="flex bg-white justify-start items-start flex-col mt-14 max-md:mx-auto z-50 w-fit mr-auto">
              <HashLink
              smooth
                to={"/#Sekai"}
                onClick={() => { 
                  setIsOpen(false);  
                }}
                className=" hover:text-themeGreen duration-200 mb-4 text-[4.3vw] font-semibold cursor-pointer "
              >
                Sekai
              </HashLink>
              <Accordion className="!border-none !bg-transparent !shadow-none focus:!outline-none focus:!ring-0 focus:!border-none active:!border-none hover:!border-none">
                <Accordion.Panel className="!p-0 !border-none !bg-transparent !shadow-none focus:!outline-none focus:!ring-0 focus:!border-none active:!border-none ">
                  <Accordion.Title className="!p-0 !border-none !bg-transparent !shadow-none focus:!outline-none focus:!ring-0 focus:!border-none active:!border-none hover:!border-none !text-black hover:!text-themeGreen duration-200 mb-4 text-[4.3vw] font-semibold cursor-pointer">
                    Unit
                  </Accordion.Title>
                  <Accordion.Content className="list-none max-md:justify-center px-0 transition ">
                    {unitList}
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <HashLink
              smooth
                to={"/#News"}
                onClick={() => {setIsOpen(false)}}
                className="hover:text-themeGreen duration-200 mb-4 text-[4.3vw] font-semibold cursor-pointer "
              >
                News
              </HashLink>
            </div>
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
          </div> */}
        </div>
      )}
      {<NavbarSide />}
    </>
  );
}
export default Navbar;
