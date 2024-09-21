import React from "react";
import { useEffect } from "react";
function Loading ({isVideoLoading,isError}){
    useEffect(()=>{
        if(isVideoLoading){
            document.body.style.overflow="hidden"
        }
        else{
            document.body.style.overflow="auto"
        }
    },[isVideoLoading])
    return(
        <>
        <div className="fixed flex flex-col justify-center items-center text-center bg-themeGreen h-full w-full z-50 overflow-hidden pointer-events-none">
            <h1 className="text-6xl tracking-wider font-semibold mb-2 text-white font-Poppins">Loading...</h1>
            <div className="h-20 w-fit relative flex items-end justify-center">
                <img loading="lazy" className="animate-bounceLoadAnimation animation-delay-75 size-9" src={`${require('../assets/other/'+'Cool.png')}`}/>
                <img loading="lazy" className="animate-bounceLoadAnimation animation-delay-100 mx-1 size-9" src={`${require('../assets/other/'+'Cute.png')}`}/>
                <img loading="lazy" className="animate-bounceLoadAnimation animation-delay-150 mx-1 size-9" src={`${require('../assets/other/'+'Pure.png')}`}/>
                <img loading="lazy" className="animate-bounceLoadAnimation animation-delay-200 mx-1 size-9" src={`${require('../assets/other/'+'Happy.png')}`}/>
                <img loading="lazy" className="animate-bounceLoadAnimation animation-delay-250 size-9" src={`${require('../assets/other/'+'Mysterious.png')}`}/>
            </div>
            {isError&&<h2>{isError}... Pls reload</h2>}
        </div>
        </>
    )
}
export default Loading