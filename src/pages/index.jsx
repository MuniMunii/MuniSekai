import React from "react";
import UnitListIntroduction from "../component/UnitListIntroduction";
import { useEffect, useState, useRef } from "react";
import NewsComp from "../component/news";
import "../styles/animation.css";
import FooterComp from "../component/footer";
import ImageDisplay from "../component/imageDisplay";
import Loading from "../component/loading";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, HashNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function Index() {
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isError, setIsError] = useState(null);
  const Location = useLocation();
  const Sections = ["index", "sekai-tag", "news"];
  let isWatched = localStorage.getItem("watched");
  useEffect(() => {
    if (window.location.hash) {
      const elementID = window.location.hash.substring(1);
      const element = document.getElementById(elementID);
      
      if (element) {
        // Scroll to the element when the page loads or hash changes
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Add delay for debugging, can be adjusted or removed
      }
    }
  }, [window.location.hash]);
  useEffect(() => {
    const isDesktop=window.matchMedia("(min-height: 640px) and (min-width: 1240px)")
    if(!isDesktop.matches){
    const swiperSlides = document.querySelectorAll(".swiper-slide");
    swiperSlides.forEach((slide) => {
      slide.addEventListener("wheel", (e) => {
        const content = slide.querySelector(".slide-content");
        if (content) {
          const maxScroll = content.scrollHeight - content.clientHeight;
          const currentScroll = content.scrollTop;
          if (
            (currentScroll === 0 && e.deltaY < 0) ||
            (currentScroll >= maxScroll && e.deltaY > 0)
          ) {
            e.stopPropagation();
          } else {
            e.preventDefault();
            content.scrollTop += e.deltaY;
          }
        }
      });
    });
  }
  }, []);
  return (
    <Swiper
      className="mySwiper"
      modules={[Mousewheel, Pagination, HashNavigation]}
      autoHeight={true}
      hashNavigation={{ watchState: true }}
      navigation={true}
      direction={"vertical"}
      freeMode={true}
      slidesPerView='auto'
      mousewheel={{ forceToAxis: true}}
    >
      <SwiperSlide data-hash="Index" key={'Index'}>
        <ImageDisplay
          setIsVideoLoading={setIsVideoLoading}
          setIsError={setIsError}
          videoEnded={videoEnded}
          setVideoEnded={setVideoEnded}
        />
      </SwiperSlide>
      {isVideoLoading ? (
        <Loading isVideoLoading={isVideoLoading} isError={isError} />
      ) : (
        <>
          {(videoEnded || isWatched === "true") && (
            <>
              {/* unitlist */}
              <SwiperSlide data-hash="Sekai" key={'Unit-intro'}>
                <div className="slide-content overflow-y-auto scrollbar-hidden">
                  <UnitListIntroduction />
                </div>
              </SwiperSlide>
              {/* news */}
              <SwiperSlide data-hash="News" key={'News'}>
                <div className="slide-content overflow-y-auto scrollbar-hidden">
                  <NewsComp />
                </div>
              </SwiperSlide>
              {/* i remove this because ugly */}
              {/* <GameplayInfo /> */}
              {/* footer */}
              <SwiperSlide data-hash="Footer" className="h-auto" key={'Footer'}>
                <div className="slide-content overflow-y-auto scrollbar-hidden">
                  <FooterComp />
                </div>
              </SwiperSlide>
            </>
          )}
        </>
      )}
    </Swiper>
  );
}
export default Index;
