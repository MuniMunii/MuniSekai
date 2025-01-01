import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import { useState } from "react";
import { entryAnimation } from "../utils/utils";
import "../styles/root.css";
function NewNews() {
  const [newsType, setNewsType] = useState("Latest");
  // useEffect untuk Effect ketika ganti filter newsType 
  useEffect(() => {
    console.log(newsType);
    const newsItems = document.querySelectorAll(".news-title");
    let initDelay = 150;
    newsItems.forEach((item) => {
      item.classList.remove('transform-none');
      item.classList.add('-translate-x-[150%]','hidden')
      item.style.transitionDelay=`${initDelay}ms`
      initDelay += 100;
      setTimeout(()=>{item.classList.remove('hidden')},50)
      setTimeout(() => {
        item.classList.remove('-translate-x-[150%]')
        item.classList.add('transform-none');
      }, 100);
    });
  }, [newsType]);
  const dummyNews = [
    {
      type: "Event",
      Desc: "24 Hours with the Animals Police! Gacha",
      date:'2024-12-10'
    },
    {
      type: "Event",
      Desc: "24 Hours with the Animals Police! Story",
      date:'2024-12-11'
    },
    {
      type: "Event",
      Desc: "3 New Cards",
      date:'2024-12-12'
    },
    {
      type: "Notice",
      Desc: "1.0.1 Maintenance",
      date:'2024-12-8'
    },
    {
      type: "Notice",
      Desc: "1.0.1 Updates",
      date:'2024-12-9'
    }
  ];
  const newsFilter = dummyNews
    .filter((news) =>
      newsType === "Latest" ? news.type !== newsType : news.type === newsType
    )
    .sort((a,b)=>{
      const dayA=parseInt(a.date.split('-')[2])
      const dayB=parseInt(b.date.split('-')[2])
      return dayB-dayA
    })
    .map((news, index) => {
      return (
        <p
          key={`news-${index}`}
          className={`news-title font-testDesc p-2 cursor-pointer hover:bg-black hover:bg-opacity-15 transition-transform duration-[350ms] flex justify-between`}
        >{`[${news.type}] ${news.Desc}`}<span>{news.date}</span></p>
      );
    });
  return (
    <>
      <div
        className="min-h-screen w-screen flex justify-center items-center flex-wrap bg-cover"
        style={{
          backgroundImage: `url(${require("../assets/other/" +
            "miya_rooftop.png")})`,
        }}
      >
        <div className=" w-[85%] max-w-[950px] h-fit py-10 flex-col">
          <div className="w-full bg-grey flex justify-end align-center bg-themeGreen bg-opacity-70">
            <p
              onClick={() => setNewsType("Latest")}
              className={`w-32 h-9 flex items-center justify-center font-bold tracking-wide uppercase  cursor-pointer hover:bg-black hover:bg-opacity-15 ${
                newsType === "Latest" ? " text-[#FF679A]" : "text-black"
              }`}
            >
              Latest
            </p>
            <p
              onClick={() => setNewsType("Event")}
              className={`w-32 h-9 flex items-center justify-center font-bold tracking-wide uppercase  cursor-pointer hover:bg-black hover:bg-opacity-15 ${
                newsType === "Event" ? " text-[#FF679A]" : "text-black"
              }`}
            >
              Event
            </p>
            <p
              onClick={() => setNewsType("Notice")}
              className={`w-32 h-9 flex items-center justify-center font-bold tracking-wide uppercase  cursor-pointer hover:bg-black hover:bg-opacity-15 ${
                newsType === "Notice" ? " text-[#FF679A]" : "text-black"
              }`}
            >
              Notice
            </p>
          </div>
          <div className="bg-slate-300 bg-opacity-50 backdrop-blur-sm flex flex-row justify-between items-start h-96 pr-4 max-md:flex-col-reverse max-md:w-full">
            <div className="text-left w-[80%] px-3 pb-3 h-full overflow-hidden">
              <h1 className="news-title transition-transform duration-[50ms] text-8xl uppercase p-2 font-Poppins font-semibold text-slate-800">{newsType}</h1>
              <div className="h-60 overflow-auto font-kanit">
              {newsFilter}
              </div>
            </div>
            <div className="w-full max-w-[450px] h-56 self-center">
              <Carousel slideInterval={3000} slide >
                <img
                loading="lazy"
                  src={require("../assets/other/" + "animal_banner.png")}
                  alt={"Animal-Banner24"}
                  className="h-full transition duration-200 hover:scale-105"
                />
                <div className="bg-gradient-to-tr from-themeGreen to-WSTheme relative h-full w-full p-2 rounded-lg">
                <img
                loading="lazy"
                  src={require("../assets/char/" + "minori_part.png")}
                  alt={"Anima-Banner-Minori"}
                  className="w-full h-full cursor-pointer border-inherit rounded-md"
                />
                </div>
                <div className="bg-gradient-to-tr from-themeGreen to-WSTheme relative h-full w-full p-2 rounded-lg">
                <img
                loading="lazy"
                  src={require("../assets/char/" + "shiho_part.png")}
                  alt={"Anima-Banner-Shiho"}
                  className="w-full h-full cursor-pointer border-inherit rounded-md"
                />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="w-full h-[20px] border-t-2 border-t-black flex justify-between items-center">
            <p className="uppercase font-bold cursor-pointer transition-colors hover:text-VBSTheme">
              More +
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewNews;
