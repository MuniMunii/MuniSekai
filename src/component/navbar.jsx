import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
function Navbar() {
  const [isDekstopScreen, setDekstopScreen] = useState(
    window.innerWidth >= 1024
  );
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setIsAnimation] = useState(false);
  const [render,setRender]=useState(false)

  useEffect(() => {
    // timer dan renderTimer ini berfungsi buat effect mounting dan unmount component contoh kaya di side bar
    // this timer and renderTimer for mounting and unmount component effect animation like sidebar
    let Timer;
    let renderTimer;
    if(isOpen){
        Timer=setTimeout(()=>{setIsAnimation(true)},100)
        setRender(true)
    }
    else if(!isOpen){
        setIsAnimation(false)
        renderTimer=setTimeout(()=>{setRender(true)},300)
    }
    return ()=>clearTimeout(Timer),clearTimeout(renderTimer)
  }, [isOpen]);

  function handleResize() {
    setDekstopScreen(window.innerWidth >= 1024);
  }
  // scroll effect that will dissapear when scroll down and will appear when scroll up
  // scroll effect yang akan hilang kalo scroll kebawah dan tampil jika scroll ke atas
  const NavbarRef = useRef(null);
  let prevScrollPost = useRef(window.pageYOffset);
  function navbarScrollEffect() {
    const currentScrollPost = window.pageYOffset;
    if (prevScrollPost.current > currentScrollPost && !isOpen) {
      NavbarRef.current.classList.add("opacity-100", "translate-y-0");
    } else {
      NavbarRef.current.classList.remove("opacity-100", "translate-y-0");
      NavbarRef.current.classList.add("-translate-y-full", "opacity-0");
    }
    prevScrollPost.current = currentScrollPost;
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", navbarScrollEffect);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", navbarScrollEffect);
    };
  }, []);
  function NavbarSide() {
    return (
      <>
        <div
          className="flex items-center justify-between z-50 w-full fixed p-3 top-0 opacity-100 translate-y-0 transition-all duration-300"
          ref={NavbarRef}
        >
          <img
            src={`${require("../assets/other/" + "Logo.png")}`}
            alt="logo-pjsk"
            className={`w-40 z-10 ${isOpen?'opacity-0':'opacity-100'} transition-all`}
          />
          <div className="p-2 bg-slate-100 rounded-full fixed z-50 right-2">
            <Hamburger toggle={setIsOpen} toggled={isOpen} />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
    {/* side navbar */}
    {render&&(<div
        className={`${
          animation? "opacity-100 bg-black/50 inset-0 visible" : "invisible opacity-0"
        } w-full flex justify-between h-full fixed bg-black/50 backdrop-blur-lg inset-0 transition-all duration-500 z-10`}
      >
        <img
          src={`${require("../assets/other/" + "text_logo.webp")}`}
          alt="logo-pjsk"
          className="w-[25vh] m-2  relative filter-none pointer-events-none"
        />
        <div
          className={`${
            animation ? "translate-x-0" : "translate-x-full"
          } w-[25%]  h-full bg-white p-4 transition-all duration-300 z-50`}
        >
          <div className="flex justify-start items-start flex-col mt-14">
            <a className="hover:text-pink-300 mb-4 text-3xl font-semibold">ssssss</a>
            <a className="hover:text-pink-300 mb-4 text-3xl font-semibold">ssssss</a>
            <a className="hover:text-pink-300 mb-4 text-3xl font-semibold">ssssss</a>
            <a className="hover:text-pink-300 mb-4 text-3xl font-semibold">ssssss</a>
          </div>
        </div>
      </div>)}
      {<NavbarSide/>}
    </>
  );
}
export default Navbar;