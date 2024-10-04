import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { AccordionContent, Accordion, AccordionTitle } from "flowbite-react";
import { DATA_SEKAI } from "../utils/data";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setIsAnimation] = useState(false);
  const [render, setRender] = useState(false);
  const location=useLocation()
  useEffect(()=>{
    let Timer;
    if(location.hash){
      const elementID=location.hash.substring(1);
      const element=document.getElementById(elementID)
      // delay untuk debug nanti di remove jika sudah selesai
      // this setTimeout for debugging delay if i done i will removed it
      if(element){
        Timer=setTimeout(()=>{element.scrollIntoView({behavior:'instant'})},300)
      }
    }
    return ()=>{clearTimeout(Timer)}
  },[location])
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
      document.body.style.overflow='auto'
    }
    return () => clearTimeout(Timer), clearTimeout(renderTimer);
  }, [isOpen]);

  // scroll effect that will dissapear when scroll down and will appear when scroll up
  // scroll effect yang akan hilang kalo scroll kebawah dan tampil jika scroll ke atas
  const NavbarRef = useRef(null);
  let prevScrollPost = useRef(window.pageYOffset);
  function navbarScrollEffect() {
    const currentScrollPost = window.pageYOffset;
    if (!isOpen) {
      if (prevScrollPost.current > currentScrollPost) {
        NavbarRef.current.classList.add("opacity-100", "translate-y-0");
      } else {
        NavbarRef.current.classList.remove("opacity-100", "translate-y-0");
        NavbarRef.current.classList.add("-translate-y-full", "opacity-0");
      }
      prevScrollPost.current = currentScrollPost;
    }
  }
  // ini useEffect buat handel scroll navbar
  // this useEffect for handling scroll effect on navbar
  useEffect(() => {
    window.addEventListener("scroll", navbarScrollEffect);
    return () => {
      window.removeEventListener("scroll", navbarScrollEffect);
    };
  }, []);
  function NavbarSide() {
    return (
      <>
        <div
          className={`flex items-center justify-between z-30 w-full fixed p-3 top-0 opacity-100 translate-y-0 transition-all duration-300`}
          ref={NavbarRef}
        >
          <img
            src={`${require("../assets/other/" + "Logo.png")}`}
            alt="logo-pjsk"
            className={`w-40 z-10 left-2 top-0 ${
              isOpen ? "opacity-0" : "opacity-100"
            } transition-all`}
          />
          <div className="p-2 bg-slate-100 rounded-full fixed z-50 right-2">
            <Hamburger toggle={setIsOpen} toggled={isOpen} />
          </div>
        </div>
      </>
    );
  }
  const unitList = Object.entries(...DATA_SEKAI).map(([key, data]) => {
    return (
      <NavLink to={data.id} onClick={()=>setIsOpen(false)}>
      <li key={data.id} className={`font-semibold cursor-pointer mb-7 hover:underline flex items-center text-wrap `} style={{color:data.Theme}}>
        <img
          src={`${require("../assets/Unit/" + data.Logo)}`}
          alt="logo-pjsk"
          className={`mr-1`}
        />{" "}
        {data.groupName.split(",")}
      </li>
      </NavLink>
    );
  });

  return (
    <>
      {/* side navbar */}
      {render && (
        <div
          className={`${
            animation
              ? "opacity-100 bg-black/50 inset-0 visible"
              : "invisible opacity-0"
          } w-full flex justify-between h-full fixed bg-black/50 backdrop-blur-lg inset-0 transition-all duration-500 z-10 pointer-events-none`}
        >
          <img
            src={`${require("../assets/other/" + "text_logo.webp")}`}
            alt="logo-pjsk"
            className="w-[25vh] m-2 srelative filter-none select-none"
          />
          <div
            className={`${
              animation ? "translate-x-0" : "translate-x-full"
            } md:w-[35%] w-[60%] h-full overflow-auto bg-white text-wrap px-8 flex flex-col justify-between py-6 transition-all duration-300 z-30 font-Poppins pointer-events-auto scrollbar-hidden`}
          >
            <div className="flex justify-start items-start flex-col mt-14 max-md:mx-auto z-50 w-fit mr-auto">
              <NavLink to={'/#sekai-tag'}  onClick={()=>setIsOpen(false)} className=" hover:text-themeGreen duration-200 mb-4 text-[4.3vw] font-semibold cursor-pointer ">
                Sekai
              </NavLink>
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
              <NavLink to={'/#news'} onClick={()=>setIsOpen(false)} className="hover:text-themeGreen duration-200 mb-4 text-[4.3vw] font-semibold cursor-pointer ">
                News
              </NavLink>
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
          </div>
        </div>
      )}
      {<NavbarSide />}
    </>
  );
}
export default Navbar;
