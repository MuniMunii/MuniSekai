import React from "react";
import { Carousel } from "flowbite-react";
import { mouseEnterAndLeaveEffect } from "../utils/utils";
import "../styles/news.css"
function NewsComp() {
  return (
    <>
      <div className="w-full ">
        <div className="w-[90%] my-auto h-[90vh] mx-auto flex justify-center md:flex-row flex-col items-center">
          <div className="image-border mx-6 border-2 rounded-lg relative border-blue-400 w-full h-[275px] max-[760px]:h-[400px] opacity-0 -translate-x-full duration-500 transition-transform overflow-hidden">
            <Carousel
              slide={true}
              leftControl=""
              rightControl=""
              slideInterval={2000}
            >
              <img src={`${require("../assets/char/" + "hb_miku.png")}`} className="w-full h-full object-cover hover:scale-125 transition-all duration-100"/>
              <img
                src={`${require("../assets/char/" + "hb_mizuki.png")}`} className="w-full h-full object-cover hover:scale-125 transition-all duration-100"
              />
              <img
                src={`${require("../assets/char/" + "hb_ichika.png")}`} className="w-full h-full object-cover hover:scale-125 transition-all duration-100"
              />
            </Carousel>
          </div>
          <div className="news-list flex flex-col justify-start h-fit w-full max-md:mr-auto opacity-0 translate-x-full duration-500 transition-transform">
            <h1 className="pb-3 pl-3 mb-4 border border-b-blue-200 text-left text-6xl">
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
              <div className="text-left mt-2 border border-green-500 py-2 px-6 w-full group-hover:translate-x-10 transition-transform duration-150">8/31: Happy Birthday, <span className="text-[#33CCBA] font-semibold">Miku!</span></div>
              <img
                src={`${require("../assets/char/" + "chibi_miku.png")}`}
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
              <div className="text-left mt-2 border border-green-500 py-2 px-6 w-full group-hover:translate-x-10 transition-transform duration-150">8/27: Happy Birthday, <span className="text-[#E4A8CA] font-semibold">Mizuki!</span></div>
              <img
                src={`${require("../assets/char/" + "chibi_mizuki.png")}`}
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
              <div className="text-left mt-2 border border-green-500 py-2 px-6 w-full group-hover:translate-x-10 transition-transform duration-150">8/11: Happy Birthday, <span className="text-[#33AAEE] font-semibold">Ichika!</span></div>
              <img
                src={`${require("../assets/char/" + "chibi_ichika.png")}`}
                className="chibi-image translate-x-full transition-all duration-300 size-10 opacity-0 absolute left-0 blur-md mr-1"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsComp;
