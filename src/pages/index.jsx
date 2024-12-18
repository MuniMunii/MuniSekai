import React from "react";
import { useEffect, useState, useRef } from "react";
// import NewsComp from "../component/news";
import "../styles/animation.css";
// import ImageDisplay from "../component/imageDisplay";
import LoadingComp from "../component/loading";
import UnitListTest from "../component/unitListTest";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, HashNavigation,Scrollbar } from "swiper/modules";
import NewNews from "../component/newNews";
import "swiper/css";
import "swiper/css/pagination";
function Index() {
  const [delayedImage, setDelayedImage] = useState(false);
  let videoRef = useRef(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isError, setIsError] = useState(null);
  let isWatched = localStorage.getItem("watched");
  const location = useLocation();
  const [oldID, setOldID] = useState(null); 
  const handleVideo = () => {
    let video = videoRef.current;
    if (video) {
      video.currentTime = video.duration;
      video.pause();
      if (video.currentTime === video.duration) {
        setVideoEnded(true);
        localStorage.setItem("watched", "true");
        setTimeout(() => {
          setDelayedImage(true);
        }, 100);
      }
    }
  };
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
    const isDesktop = window.matchMedia('(min-width: 1240px) and (min-height: 640px)');
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
  useEffect(() => {
    // event jika video masi blom loaded index ga bakal muncul
    // this event for if video not loaded yet index.jsx will not show up
    const handleVideoAsync = async () => {
      let video = videoRef.current;
      if (video) {
        setIsVideoLoading(true);
        await new Promise((resolve) => {
          video.onloadeddata = () => {
            resolve();
          };
        });
        setIsVideoLoading(false)
          .then(() => {
            video.play();
          })
          .catch((error) => {
            setIsError(String(error));
          });
        // fetch(video)
        // .then(
        //   video.onloadeddata()
        // ).then(video.play())
        // .finally(setIsVideoLoading(false))
        //   await new Promise((res)=>{
        //     video.onloadeddata=()=>{
        //       res()
        //     }
        //   }
        // );
        // setIsVideoLoading(false)
        // video.play()
      }
      handleVideoAsync();
    };
  }, [setIsVideoLoading]);
  function ImageDisplay(){
    const ImageIndex = () => {
      return (
        <div
          className={`w-screen h-screen bg-cover relative bg-center flex items-end pointer-events-none select-none bg-white ${
            delayedImage ? "opacity-100 filter-none" : "opacity-0 blur-md"
          } transition-all duration-500`}
          style={{
            backgroundImage: `url(${require("../assets/other/" + "mv_pc.jpg")})`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
          }}
        >
          <img
            loading="lazy"
            src={`${require("../assets/other/" + "Logo.png")}`}
            alt="logo-pjsk"
            className={`mx-auto mb-11 w-[30%] select-none pointer-events-none`}
          />
          <div className="w-full h-24 border -bottom-14 bg-slate-50/35 blur-lg  absolute -z-10"></div>
        </div>
      );
    };
    const VideoIndex = () => {
      return (
        <div className="w-full h-screen relative">
          <video
            ref={videoRef}
            onPause={handleVideo}
            src={`${require("../assets/other/" + "mv_pc.mp4")}`}
            autoPlay={true}
            muted={true}
            alt="Video-intro"
            className="w-screen h-screen object-cover bg-white/40"
          />
        </div>
      );
    };
    const imageChanging = videoEnded ? <ImageIndex/> : <VideoIndex />;
    return imageChanging;
  }
  return (
    <Swiper
      className="mySwiper mySwiper-index"
      modules={[Mousewheel, HashNavigation]}
      autoHeight={true}
      onSlideChange={handleSlideChange}
      onReachEnd={handleReachEnd}
      // hashNavigation={{ watchState: true }}
      navigation={true}
      direction={"vertical"}
      freeMode={true}
      slidesPerView='auto'
      mousewheel={{ forceToAxis: true}}
    >
      <SwiperSlide key={'Index'} className="slide-content">
        <ImageDisplay/>
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
              {/* i remove this because ugly */}
              {/* <GameplayInfo /> */}
              {/* footer */}
              {/* <SwiperSlide  key={'Footer'}>
                <div className="bg-black desktop:h-screen h-full w-full flex flex-col-reverse">
                <FooterComp />
                </div>
              </SwiperSlide> */}
            </>
          )}
        </>
      )}
    </Swiper>
  );
}
export default Index;
