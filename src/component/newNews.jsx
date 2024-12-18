import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import { useState } from "react";
import { entryAnimation } from "../utils/utils";
import '../styles/animation.css'
function NewNews() {
  const [newsType, setNewsType] = useState("Latest");
  useEffect(()=>{
    const newsItems=document.querySelectorAll('.news-title')
    newsItems.forEach(item=>{
        item.classList.remove('active')
        setTimeout(()=>{
            item.classList.add('active')
        },50)
    })
  },[newsType])
  const dummyNews = [
    {
      type: "Event",
      Desc: "24 Hours with the Animals Police! Gacha",
    },
    {
      type: "Event",
      Desc: "24 Hours with the Animals Police! Story",
    },
    {
      type: "Event",
      Desc: "3 New Cards",
    },
    {
      type: "Notice",
      Desc: "1.0.1 Maintenance",
    },
    {
      type: "Notice",
      Desc: "1.0.1 Updates",
    },
  ];
  const newsFilter = dummyNews
    .filter((news) =>
      newsType === "Latest" ? news.type !== newsType : news.type === newsType
    )
    .map((news, index) => {
      return (
        <p
          key={`news-${index}`}
          className={`news-title p-2 cursor-pointer hover:bg-black hover:bg-opacity-15 text-black -translate-x-full transition-transform duration-100 delay-75 active`}
        >{`[${news.type}] ${news.Desc}`}</p>
      );
    });
  return (
    <>
      <div className="min-h-screen w-screen flex justify-center items-center flex-wrap bg-cover" style={{backgroundImage: `url(${require("../assets/other/" +'miya_rooftop.png')})`,}}>
        <div className=" w-[85%] max-w-[950px] h-fit py-10 flex-col">
          <div className="w-full bg-grey flex justify-end align-center bg-themeGreen">
            <p
              onClick={() => setNewsType("Latest")}
              className={`w-32 h-9 flex items-center justify-center font-bold tracking-wide uppercase text-black cursor-pointer hover:bg-black hover:bg-opacity-15 ${newsType==='Latest'?'text-[#FF679A]':'text-black'}`}
            >
              Latest
            </p>
            <p
              onClick={() => setNewsType("Event")}
              className={`w-32 h-9 flex items-center justify-center font-bold tracking-wide uppercase text-black cursor-pointer hover:bg-black hover:bg-opacity-15 ${newsType==='Event'?'text-[#FF679A]':'text-black'}`}
            >
              Event
            </p>
            <p
              onClick={() => setNewsType("Notice")}
              className={`w-32 h-9 flex items-center justify-center font-bold tracking-wide uppercase text-black cursor-pointer hover:bg-black hover:bg-opacity-15 ${newsType==='Notice'?'text-[#FF679A]':'text-black'}`}
            >
              Notice
            </p>
          </div>
          <div className="bg-slate-300 bg-opacity-50 backdrop-blur-sm flex flex-row justify-between items-start h-96 pr-4 max-md:flex-col-reverse max-md:w-full">
            <div className="text-left w-[80%] h-full">
              <h1 className="text-8xl uppercase p-2 font-Poppins">{newsType}</h1>
              {newsFilter}
            </div>
            <div className="w-full max-w-[450px] h-56 self-center">
              <Carousel slideInterval={3000} slide>
                <img
                  src={require("../assets/other/" + "animal_banner.png")}
                  alt={"Animal-Banner24"}
                  className="h-full hover:scale-105 transition-transform"
                />
                <img
                  src={require("../assets/other/" + "animal_banner.png")}
                  alt={"Animal-Banner24"}
                  className="h-full hover:scale-105 transition-transform"
                />
                <img
                  src={require("../assets/other/" + "animal_banner.png")}
                  alt={"Animal-Banner24"}
                  className="h-full hover:scale-105 transition-transform"
                />
              </Carousel>
            </div>
          </div>
          <div className="w-full h-[20px] border-t-2 border-t-black flex justify-start items-center">
            <p className="uppercase font-bold cursor-pointer transition-colors hover:text-VBSTheme">More +</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewNews;
