import React from "react";
import { useState, useRef } from "react";
function ImageDisplay() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [delayedImage, setDelayedImage] = useState(false);
  let videoRef = useRef(null);
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
    <div  className={`w-full h-screen bg-cover relative bg-center flex items-end pointer-events-none bg-white ${
      delayedImage ? "opacity-100 filter-none" : "opacity-0 blur-md"
    } transition-all duration-500`} style={{
      backgroundImage: `url(${require("../assets/other/" +
        "mv_pc.jpg")})`,
    }}>
      <img
            src={`${require("../assets/other/" + "Logo.png")}`}
            alt="logo-pjsk"
            className={`mx-auto mb-11 w-[30%]`}
          />
        <div className="w-full h-24 border -bottom-14 bg-slate-50 bg-opacity-35 blur-lg border-red-700 absolute -z-10"></div>
    </div>
  ) : (
<video
  ref={videoRef}
  onPause={handleVideo}
  src={`${require("../assets/other/" + "mv_pc.mp4")}`}
  autoPlay={true}
  muted={true}
  alt="Video-intro"
  className="w-screen h-screen object-cover"
  
/>
  );
  return imageChanging;
}
export default ImageDisplay;
