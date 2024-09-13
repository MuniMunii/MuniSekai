import React from "react";
import { useState,useRef } from "react";
function ImageDisplay(){
    const [videoEnded,setVideoEnded]=useState(false)
    const [delayedImage,setDelayedImage]=useState(false)
    let videoRef=useRef(null)
    const handleVideo=()=>{
      let video=videoRef.current;
      if(video){
        video.currentTime=video.duration;
        video.pause()
        if (video.currentTime===video.duration) {
          setVideoEnded(true)
          setTimeout(()=>{setDelayedImage(true)},500)
        }
      }
    }
    const imageChanging=videoEnded?(<img src={`${require("../assets/other/" + "mv_pc.jpg")}`} className={`w-full h-screen ${delayedImage?'opacity-100 filter-none':'opacity-0 blur-md'} transition-all duration-300`}/>):<video ref={videoRef} onPause={handleVideo} src={`${require("../assets/other/" + "mv_pc.mp4")}`} autoPlay="true"  alt="" width={"100%"} className=""/>
    return imageChanging
}
export default ImageDisplay