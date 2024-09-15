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
        }, 500);
      }
    }
  };
  const imageChanging = videoEnded ? (
    <div  className={`w-full h-screen bg-cover bg-center flex items-end ${
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
