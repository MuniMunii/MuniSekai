import React from "react";
import { Carousel } from "flowbite-react";
import { mouseEnterAndLeaveEffect } from "../utils/utils";
import { useState,useEffect } from "react";
import '../styles/root.css'
import { entryAnimation } from "../utils/utils";
function NewsComp() {
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(false);
  // use Effect news card transition
  useEffect(() => {
    let timer;
    if (isNewsOpen) {
      timer = setTimeout(() => {
        setAnimationDelay(true);
      }, 100);
      document.body.style.overflow='hidden'
    } else if (!isNewsOpen) {
      setAnimationDelay(false);
      document.body.style.overflow='auto'
    }
    return () =>  clearTimeout(timer);
  }, [isNewsOpen]);
  // useEffect entry animation
  useEffect(()=>{
    entryAnimation(".image-border", "entry-animation-x");
    entryAnimation(".news-list", "entry-animation-x");
  },[])
  
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    const slider = e.currentTarget;
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = "grabbing";
  };

  const handleMouseUp = (e) => {
    isDragging = false;
    const slider = e.currentTarget;
    slider.style.cursor = "grab"; 
  };

  const handleMouseLeave = (e) => {
    if (isDragging) {
      isDragging = false;
      const slider = e.currentTarget;
      slider.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const slider = e.currentTarget;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  };
  return (
    <>
      <div className="w-full h-fit flex flex-col py-1 justify-around items-center overflow-auto relative ">
        <div className="w-[90%] flex p-4 justify-center md:flex-row flex-col items-center ">
          <div className="image-border mx-6 border-2 rounded-lg relative border-blue-400 w-full h-[275px] max-[760px]:h-[400px] opacity-0 -translate-x-full duration-500 transition-transform overflow-auto">
            <Carousel
              slide={true}
              leftControl=""
              rightControl=""
              slideInterval={2000}
            >
              <img
                loading="lazy"
                src={`${require("../assets/char/" + "hb_miku.png")}`}
                alt="hb-miku"
                className="w-full h-full object-cover hover:scale-125 transition-all duration-100"
              />
              <img
                loading="lazy"
                src={`${require("../assets/char/" + "hb_mizuki.png")}`}
                alt="hb-mizuki"
                className="w-full h-full object-cover hover:scale-125 transition-all duration-100"
              />
              <img
                loading="lazy"
                src={`${require("../assets/char/" + "hb_ichika.png")}`}
                alt="hb-ichika"
                className="w-full h-full object-cover hover:scale-125 transition-all duration-100"
              />
            </Carousel>
          </div>
          <div className="news-list flex flex-col bg-white justify-start h-full p-4 w-full rounded-md max-[760px]:mt-3 max-md:mr-auto opacity-0 translate-x-full duration-500 transition-transform">
            <h1 className="pb-3 pl-3 mb-4 border-b border-b-blue-200 text-left text-6xl">
              News
            </h1>
            <div
              className="box flex flex-row-reverse w-full items-center group"
              onMouseEnter={(event) =>
                mouseEnterAndLeaveEffect(
                  event,
                  ".chibi-image",
                  "entry-animation-x"
                )
              }
              onMouseLeave={(event) =>
                mouseEnterAndLeaveEffect(
                  event,
                  ".chibi-image",
                  "entry-animation-x"
                )
              }
            >
              <div className="text-left mt-2 border bg-slate-50 border-green-500 py-2 px-6 w-full group-hover:translate-x-[7%] transition-transform duration-150">
                8/31: Happy Birthday,{" "}
                <span className="text-[#33CCBA] font-semibold">Miku!</span>
              </div>
              <img
                src={`${require("../assets/char/" + "chibi_miku.png")}`}
                alt="chibi-miku"
                className="chibi-image translate-x-full transition-all duration-300 size-10 opacity-0 absolute left-0 blur-md mr-1"
              ></img>
            </div>
            <div
              className="box flex flex-row-reverse w-full items-center group"
              onMouseEnter={(event) =>
                mouseEnterAndLeaveEffect(
                  event,
                  ".chibi-image",
                  "entry-animation-x"
                )
              }
              onMouseLeave={(event) =>
                mouseEnterAndLeaveEffect(
                  event,
                  ".chibi-image",
                  "entry-animation-x"
                )
              }
            >
              <div className="text-left mt-2 border bg-slate-50 border-green-500 py-2 px-6 w-full group-hover:translate-x-[7%] transition-transform duration-150">
                8/27: Happy Birthday,{" "}
                <span className="text-[#E4A8CA] font-semibold">Mizuki!</span>
              </div>
              <img
                src={`${require("../assets/char/" + "chibi_mizuki.png")}`}
                alt="chibi-mizuki"
                className="chibi-image translate-x-full transition-all duration-300 size-10 opacity-0 absolute left-0 blur-md mr-1"
              ></img>
            </div>
            <div
              className="box flex flex-row-reverse w-full items-center group"
              onMouseEnter={(event) =>
                mouseEnterAndLeaveEffect(
                  event,
                  ".chibi-image",
                  "entry-animation-x"
                )
              }
              onMouseLeave={(event) =>
                mouseEnterAndLeaveEffect(
                  event,
                  ".chibi-image",
                  "entry-animation-x"
                )
              }
            >
              <div className="text-left mt-2 border bg-slate-50 border-green-500 py-2 px-6 w-full group-hover:translate-x-[7%] transition-transform duration-150">
                8/11: Happy Birthday,{" "}
                <span className="text-[#33AAEE] font-semibold">Ichika!</span>
              </div>
              <img
                src={`${require("../assets/char/" + "chibi_ichika.png")}`}
                alt="chibi-ichika"
                className="chibi-image translate-x-full transition-all duration-300 size-10 opacity-0 absolute left-0 blur-md mr-1"
              ></img>
            </div>
          </div>
        </div>
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="scroll-smooth w-[97vw] px-0 h-fit mx-0 overflow-x-scroll whitespace-nowrap touch-auto no-scrollbar select-none touch-scroll p-4  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="ml-0 bg-themeGreen p-4 mx-3 rounded-lg w-[25em] h-48 inline-block  text-wrap">
            <div className="flex items-center justify-evenly w-full h-full">
            <p className="font-semibold border-r-2 pr-1 mr-1 border-slate-100 flex items-center h-full text-black text-xl">9/17</p>
            <div className=" bg-cyan-900 rounded-md px-3 py-1 w-full h-full relative font-Poppins">
              <p className="text-white font-semibold tracking-wide">Patch Notes 1.0</p>
              <ul className="list-inside list-disc text-left font-mono">
                <li><span className="text-white">17 New Songs</span></li>
                <li><span className="text-white">New event</span></li>
                <li><span className="text-white">Optimization shop</span></li>
              </ul>
              <button onClick={()=>setIsNewsOpen(true)} className="py-2 px-4 bg-blue-600 hover:bg-blue-500 hover:text-yellow-100 text-white transition-colors absolute bottom-2 left-3  text-center rounded cursor-pointer">Read More</button>
            </div>
            </div>
          </div>
          <div className="ml-0 bg-gradient-to-br from-LeonidTheme to-themeGreen p-4 mx-3 rounded-lg w-[25em] h-48 inline-block  text-wrap">
            <div className="flex items-center justify-evenly w-full h-full">
            <p className="font-semibold border-r-2 pr-1 mr-1 border-slate-100 flex items-center h-full text-black text-xl">10/11</p>
            <div className=" bg-cyan-900 rounded-md px-3 py-1 w-full h-full relative font-Poppins">
              <p className="text-white font-semibold tracking-wide">Patch Notes 1.1</p>
              <ul className="list-inside list-disc text-left font-mono">
                <li><span className="text-white">10 New Songs</span></li>
                <li><span className="text-white">New items in Shop</span></li>
                <li><span className="text-white">Fixing minor bug</span></li>
              </ul>
              <button onClick={()=>setIsNewsOpen(true)} className="py-2 px-4 bg-blue-600 hover:bg-blue-500 hover:text-yellow-100 text-white transition-colors absolute bottom-2 left-3  text-center rounded cursor-pointer">Read More</button>
            </div>
            </div>
          </div>
          <div className="ml-0 bg-gradient-to-br from-MMJTheme to-themeGreen p-4 mx-3 rounded-lg w-[25em] h-48 inline-block  text-wrap">
            <div className="flex items-center justify-evenly w-full h-full">
            <p className="font-semibold border-r-2 pr-1 mr-1 border-slate-100 flex items-center h-full text-black text-xl">11/26</p>
            <div className=" bg-cyan-900 rounded-md px-3 py-1 w-full h-full relative font-Poppins">
              <p className="text-white font-semibold tracking-wide">Patch Notes 1.2</p>
              <ul className="list-inside list-disc text-left font-mono">
                <li><span className="text-white">New Event</span></li>
                <li><span className="text-white">New Ranked Mode</span></li>
                <li><span className="text-white">Optimization Map</span></li>
              </ul>
              <button onClick={()=>setIsNewsOpen(true)} className="py-2 px-4 bg-blue-600 hover:bg-blue-500 hover:text-yellow-100 text-white transition-colors absolute bottom-2 left-3 text-center rounded cursor-pointer">Read More</button>
            </div>
            </div>
          </div>
          <div className="ml-0 bg-gradient-to-br from-WSTheme to-themeGreen p-4 mx-3 rounded-lg w-[25em] h-48 inline-block  text-wrap">
            <div className="flex items-center justify-evenly w-full h-full">
            <p className="font-semibold border-r-2 pr-1 mr-1 border-slate-100 flex items-center h-full text-black text-xl">12/20</p>
            <div className=" bg-cyan-900 rounded-md px-3 py-1 w-full h-full relative font-Poppins">
              <p className="text-white font-semibold tracking-wide">Patch Notes 1.3</p>
              <ul className="list-inside list-disc text-left font-mono">
                <li><span className="text-white">3 New Songs</span></li>
                <li><span className="text-white">New Costumes</span></li>
                <li><span className="text-white">New Unit</span></li>
              </ul>
              <button onClick={()=>setIsNewsOpen(true)} className="py-2 px-4 bg-blue-600 hover:bg-blue-500 hover:text-yellow-100 text-white transition-colors absolute bottom-2 left-3  text-center rounded cursor-pointer">Read More</button>
            </div>
            </div>
          </div>
          <div className="ml-0 bg-gradient-to-br from-CordTheme to-themeGreen p-4 mx-3 rounded-lg w-[25em] h-48 inline-block  text-wrap">
            <div className="flex items-center justify-evenly w-full h-full">
            <p className="font-semibold border-r-2 pr-1 mr-1 border-slate-100 flex items-center h-full text-black text-xl">1/5</p>
            <div className=" bg-cyan-900 rounded-md px-3 py-1 w-full h-full relative font-Poppins">
              <p className="text-white font-semibold tracking-wide">Patch Notes 1.4</p>
              <ul className="list-inside list-disc text-left font-mono">
                <li><span className="text-white">7 New Songs</span></li>
                <li><span className="text-white">New Event</span></li>
                <li><span className="text-white">Adding Append</span></li>
              </ul>
              <button onClick={()=>setIsNewsOpen(true)} className="py-2 px-4 bg-blue-600 hover:bg-blue-500 hover:text-yellow-100 text-white transition-colors absolute bottom-2 left-3 text-center rounded cursor-pointer">Read More</button>
            </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-fit mx-auto pointer-events-none select-none">
        <img
                src={`${require("../assets/other/" + "sega_logo.png")}`}
                alt="sega-logo"
                className="h-10 w-20"
              />
              <img
                src={`${require("../assets/other/" + "crypton_logo.png")}`}
                alt="crypton-logo"
                className="h-14 mx-3 w-24"
              />
              <img
                src={`${require("../assets/other/" + "piapro_logo.png")}`}
                alt="piapro-logo"
                className="h-9 w-24"
              />
        </div>
      </div>
      {isNewsOpen && (
            <>
            <div className="fixed flex justify-center items-center w-full h-full z-50">
              <div
                onClick={() => {
                  setIsNewsOpen(false);
                }}
                className={`absolute w-full h-full bg-black/50 backdrop-blur-sm inset-0  ${
                  animationDelay ? "opacity-100" : "opacity-0"
                } duration-200 transition-all`}
              >
              </div>
              <div className={`max-w-[1000px] w-[60%] h-[80%] bg-white z-[99] ${animationDelay ? "opacity-100" : "opacity-0"} duration-200 transition-all px-10 py-6 rounded-md overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
                <h1 className="font-semibold">Patch Note (Dummy Component)</h1>
                <div className="font-mono">
                <ul className="text-left list-disc mt-2 font-mono">
                  <li className="mb-2">6 New Songs: Miku is back with a fresh set of 6 electrifying tracks, ranging from pop anthems to ballads. Whether you’re a long-time fan or new to her musics.
                    <ul className=" ml-6 list-inside">
                      <li>- Music 39</li>
                      <li>- Music 1</li>
                      <li>- Music 2</li>
                      <li>- Music 3</li>
                      <li>- Music 4</li>
                      <li>- Music 5</li>
                    </ul>
                  </li>
                  <li className="mb-2">New Event: Join Miku in an exclusive virtual concert event where she’ll perform her latest hits</li>
                  <li className="mb-2">Optimization Shop: Head over to the new Optimization Shop, where you can customize Miku’s performances</li>
                </ul>
                </div>
                <button className="float-right underline" onClick={()=>setIsNewsOpen(false)}>Close Here.</button>
              </div>
              </div>
            </>
          )}
    </>
  );
  
  
}

export default NewsComp;
