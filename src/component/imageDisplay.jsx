import React, { useEffect } from "react";
import { useState, useRef } from "react";
function ImageDisplay({ setIsVideoLoading, setIsError }) {
  const [videoEnded, setVideoEnded] = useState(false);
  const [delayedImage, setDelayedImage] = useState(false);
  let videoRef = useRef(null);
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
            console.log(error);
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
  const handleVideo = () => {
    let video = videoRef.current;
    if (video) {
      video.currentTime = video.duration;
      video.pause();
      if (video.currentTime === video.duration) {
        setVideoEnded(true);
        setTimeout(() => {
          setDelayedImage(true);
        }, 300);
      }
    }
  };
  const imageChanging = videoEnded ? (
    <div
      className={`w-full h-screen bg-cover relative bg-center flex items-end pointer-events-none select-none bg-white ${
        delayedImage ? "opacity-100 filter-none" : "opacity-0 blur-md"
      } transition-all duration-500`}
      style={{
        backgroundImage: `url(${require("../assets/other/" + "mv_pc.jpg")})`,
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
  ) : (
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
      <div className="w-full h-24 border -bottom-14 bg-slate-50/35 blur-lg absolute -z-10"></div>
    </div>
  );
  return imageChanging;
}
export default ImageDisplay;
