import React from "react";
import { useEffect, useState, useRef } from "react";
import "../styles/animation.css";
import LoadingComp from "../component/loading";
import UnitListTest from "../component/unitListTest";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, HashNavigation,Scrollbar } from "swiper/modules";
import ImageDisplay from "../component/imageDisplay";
import NewNews from "../component/newNews";
import "swiper/css";
import "swiper/css/pagination";
function Index() {
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isError, setIsError] = useState(null);
  let isWatched = localStorage.getItem("watched");
  const location = useLocation();
  const [oldID, setOldID] = useState(null); 
  const isDesktop = window.matchMedia('(min-width: 1240px) and (min-height: 640px)');
  // }
    // i dont use hashNavigate from SwiperJS because i tried it before and dont come as my expected result
    // so i use new Function
  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.slides[swiper.activeIndex]; 
    const newID = currentSlide.getAttribute("id"); 
    // kalo ganti slide hash nya ganti
    if (newID && newID !== oldID) {
      setOldID(newID); // simpan id 
      window.history.pushState(null, null, `#${newID}`); 
    } else if (!newID && oldID !== null ) {
      setOldID(null);
      window.history.pushState(null, null, "#");
    }
  };
  const handleReachEnd=()=>{
      setOldID(null);
      window.history.pushState(null, null, "#");
    }
  
    
  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      const targetSlide = document.getElementById(hash);
      if (targetSlide) {
        const swiper = document.querySelector('.swiper').swiper;
        const slideIndex = Array.from(swiper.slides).indexOf(targetSlide);
        swiper.slideTo(slideIndex);
      }
    }
  }, [location.hash]);
  useEffect(() => {
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
  });

  return (
    <Swiper
      className="mySwiper mySwiper-index"
      modules={[Mousewheel, HashNavigation]}
      autoHeight={true}
      onSlideChange={handleSlideChange}
      onReachEnd={handleReachEnd}
      navigation={true}
      direction={"vertical"}
      freeMode={true}
      slidesPerView='auto'
      mousewheel={{ forceToAxis: true}}
    >
      <SwiperSlide key={'Index'} className="slide-content">
        <ImageDisplay setIsVideoLoading={setIsVideoLoading} setVideoEnded={setVideoEnded} videoEnded={videoEnded} setIsError={setIsError}/>
      </SwiperSlide>
      {isVideoLoading ? (
        <LoadingComp isVideoLoading={isVideoLoading} isError={isError} />
      ) : (
        <>
          {(videoEnded || isWatched === "true") && (
            <>
              {/* unitlist */}
              <SwiperSlide id="Sekai" key={'Unit-intro'} className="slide-content">
                <div className=" overflow-y-auto scrollbar-hidden touch-auto">
                  <UnitListTest />
                </div>
              </SwiperSlide>
              {/* news */}
              <SwiperSlide id="News"  key={'News'} className="slide-content">
                <div className=" overflow-y-auto scrollbar-hidden">
                  <NewNews />
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
