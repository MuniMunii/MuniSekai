import React from "react";
import UnitListIntroduction from "../component/UnitListIntroduction";
import { useEffect, useState, useRef } from "react";
import NewsComp from "../component/news";
import "../styles/animation.css";
import FooterComp from "../component/footer";
import ImageDisplay from "../component/imageDisplay";
import Loading from "../component/loading";
import { useLocation } from "react-router-dom";
function Index() {
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false)
  const Location=useLocation()
  const Sections=['index','sekai-tag','news','footer']
  useEffect(()=>{
    const handleScroll=()=>{
      const offset=window.innerHeight/3
      let currentTag=''
      const scrollY=window.scrollY
      let currentSectionIndex=-1
      Sections.forEach((sectionID,index)=>{
        const section=document.getElementById(sectionID)
        if(section){
          const rect=section.getBoundingClientRect()
          if(rect.top>= -offset && rect.top < window.innerHeight - offset){currentTag=sectionID
            currentSectionIndex=index
          }
        }
      })
  // if (currentTag && !isScrolling) {
  //   setIsScrolling(true);
  //   const section = document.getElementById(currentTag);
  //   if (section) {
  //     section.scrollIntoView({ behavior:'auto'});
  //     setTimeout(() => {
  //       setIsScrolling(false);
  //     }, 500); 
  //   }
  // }
  let scrollHeight=document.body.scrollHeight
  if(currentTag){
    if(scrollY+window.innerHeight>=scrollHeight-offset&&currentSectionIndex<Sections.length-1){
      const nextSection=document.getElementById(Sections[currentSectionIndex+1])
      if(nextSection){
        nextSection.scrollIntoView({behavior:'smooth'})
      }
    }
  }
  else if(scrollY<=offset&&currentSectionIndex>0){
    const prevSection=document.getElementById(Sections[currentSectionIndex-1])
    if(prevSection){
      prevSection.scrollIntoView({behavior:'smooth'})
    }
  }
      const currentPath = window.location.pathname;
      if(currentTag&&Location.hash.substring(1) !== currentTag){
        // Navigate(`${currentTag}`,{replace:true})
        window.location.hash=currentTag
      }
      else if (!currentTag && Location.hash !== '') {
        window.history.replaceState(null, '', currentPath);
      }
    }
    window.addEventListener('scroll',handleScroll)
    return ()=>{window.removeEventListener('scroll',handleScroll)}
  },[Sections])
  return (
    <>
    <section id="index" className="transition-all duration-300">
      <ImageDisplay
        setIsVideoLoading={setIsVideoLoading}
        setIsError={setIsError}
      />
      </section>
      {isVideoLoading ? (
        <Loading isVideoLoading={isVideoLoading} isError={isError} />
      ) : (
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
  );
}
export default Index;
