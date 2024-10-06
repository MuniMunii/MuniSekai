import React from "react";
import UnitListIntroduction from "../component/UnitListIntroduction";
import { useEffect, useState, useRef } from "react";
import NewsComp from "../component/news";
import "../styles/animation.css";
import FooterComp from "../component/footer";
import ImageDisplay from "../component/imageDisplay";
import Loading from "../component/loading";
import { useLocation } from "react-router-dom";
import { get } from "react-scroll/modules/mixins/scroller";
import { scrollStopEffect } from "../utils/utils";
function Index() {
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false)
  const [isError, setIsError] = useState(null);
  const Location = useLocation();
  const Sections = ["index", "sekai-tag", "news"];
  let isWatched=localStorage.getItem("watched")
  // useEffect ini buat scroll effect nge handle scroll dan id hash setiap id
  useEffect(() => {
    // sedang mencari cara menggunakan overflow hidden tetapi tidak bisa karna body overflow nyangkut
    // jadi ada effect shrink and grow pas timeout selesai
    // sementara pakai freezeScroll
    const scrollPosition = {
      top: window.scrollY,
      left: window.scrollX,
    };
    const freezeScroll = () => {
      window.scrollTo(scrollPosition.left, scrollPosition.top);
    };
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        window.addEventListener("scroll", freezeScroll);
        // scrollStopEffect(true)
        setTimeout(() => {
          window.removeEventListener("scroll", freezeScroll);
        }, 200);
      } else {
        window.removeEventListener("scroll", freezeScroll);
      }
      // the effect that i really want. need to find solutions for removing scrollbar in body
      // if(hash){
      //   document.body.style.overflow='hidden'
      //   setTimeout(() => {
      //     document.body.style.overflow='auto';
      //   }, 300);
      // }
      // else{
      //   document.body.style.overflow='auto';
      // }
    };
    const handleScroll = () => {
      const offset = window.innerHeight / 3;
      let currentTag = "";
      const scrollY = window.scrollY;
      let currentSectionIndex = -1;
      Sections.forEach((sectionID, index) => {
        const section = document.getElementById(sectionID);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= -offset && rect.top < window.innerHeight - offset) {
            currentTag = sectionID;
            currentSectionIndex = index;
          }
        }
      });
      let scrollHeight = document.body.scrollHeight;
      if (currentTag) {
        if (
          scrollY + window.innerHeight >= scrollHeight - offset &&
          currentSectionIndex < Sections.length - 1
        ) {
          const nextSection = document.getElementById(
            Sections[currentSectionIndex + 1]
          );
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "instant" });
          }
        }
      } else if (scrollY <= offset && currentSectionIndex > 0) {
        const prevSection = document.getElementById(
          Sections[currentSectionIndex - 1]
        );
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: "instant" });
        }
      }
      const currentPath = window.location.pathname;
      if (currentTag && Location.hash.substring(1) !== currentTag) {
        window.location.hash = currentTag;
      } else if (!currentTag && Location.hash !== "") {
        window.history.replaceState(null, "", currentPath);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [Sections]);
  return (
    <>
      <section id="index" className="transition-all duration-300">
        <ImageDisplay
          setIsVideoLoading={setIsVideoLoading}
          setIsError={setIsError}
          videoEnded={videoEnded}
          setVideoEnded={setVideoEnded}
        />
      </section>
      {isVideoLoading ? (
        <Loading isVideoLoading={isVideoLoading} isError={isError} />
      ) : (
        <>
          {(videoEnded||isWatched==="true") && (
            <>
              {/* unitlist */}
              <UnitListIntroduction />
              {/* news */}
              <section id="news" className="transition-all duration-300">
                <NewsComp />
              </section>
              {/* i remove this because ugly */}
              {/* <GameplayInfo /> */}
              {/* footer */}
              <section id="footer" className="transition-all duration-300">
                <FooterComp />
              </section>
            </>
          )}
        </>
      )}
    </>
  );
}
export default Index;
