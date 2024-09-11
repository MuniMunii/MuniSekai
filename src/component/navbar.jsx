import React, { useRef } from "react";
import { useState,useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";

function Navbar(){
    const [isDekstopScreen,setDekstopScreen]=useState(window.innerWidth >= 1024)
    const [isOpen,setIsOpen]=useState(false)
    const [animation,setIsAnimation]=useState(false)
    console.log(animation);
    
    useEffect(()=>{
        if(isOpen){
            setIsAnimation(true)
        }
        else{
            const timer=setTimeout(()=>{setIsAnimation(isOpen);},200)
            return clearTimeout(timer)
        }
        
        },[isOpen]);
    
    function handleResize(){
        setDekstopScreen(window.innerWidth >= 1024)
    }
    // scroll effect that will dissapear when scroll down and will appear when scroll up
    // scroll effect yang akan hilang kalo scroll kebawah dan tampil jika scroll ke atas
    const NavbarRef=useRef(null)
    let prevScrollPost = useRef(window.pageYOffset);
    function navbarScrollEffect(){
        const currentScrollPost=window.pageYOffset
        if(prevScrollPost.current>currentScrollPost&&!isOpen){
            NavbarRef.current.classList.add('opacity-100','translate-y-0')
        }
        else{
            NavbarRef.current.classList.remove('opacity-100','translate-y-0')
            NavbarRef.current.classList.add('-translate-y-full','opacity-0')
        }
        prevScrollPost.current = currentScrollPost;
    }
    useEffect(()=>{
        handleResize()
        window.addEventListener('resize',handleResize)
        window.addEventListener('scroll',navbarScrollEffect)
        return()=>{
            window.removeEventListener('resize',handleResize)
            window.removeEventListener('scroll',navbarScrollEffect)
        }
    },[])
    function DekstopNav(){
        return (
        <>
        <div className="bg-slate-100 bg-opacity-30 flex items-center justify-between z-10 w-full fixed p-2 top-0 opacity-100 translate-y-0 transition-all duration-300" ref={NavbarRef}>
            <img src={`${require("../assets/other/" + "Logo.png")}`} alt="logo-pjsk"/>
            <div className="flex">
                <a>Home</a>
                <a>Sekai</a>
                <a>News</a>
                <a>Game</a>
            </div>
        </div>
        <div className="fixed bg-white right-0 my-auto p-4 z-10 top-[50%] rounded-tl-xl rounded-bl-xl">
            <img src={`${require("../assets/other/" + "appicon.png")}`} alt="app-icon" className="h-10 w-28 my-2 cursor-pointer"/>
            <img src={`${require("../assets/other/" + "playicon.png")}`} alt="playstore-icon" className="h-10 w-28 my-2 cursor-pointer"/>
        </div>
        </>)
    }
    function Navbar(){
        return(<>
        <div className="flex items-center justify-between z-10 w-full fixed p-3 top-0 opacity-100 translate-y-0 transition-all duration-300" ref={NavbarRef}>
            <img src={`${require("../assets/other/" + "Logo.png")}`} alt="logo-pjsk" className="w-40"/>
            <div className="p-2 bg-slate-100 rounded-full fixed z-50 right-2"><Hamburger toggle={setIsOpen} toggled={isOpen}/></div>
        </div>
        </>)
    }
    const conditionalNav=isDekstopScreen?<DekstopNav/>:<Navbar/>
    return(
    <>
    <div className={`${isOpen?"opacity-100 bg-black/50 inset-0 visible":"invisible"} w-full flex justify-between h-full fixed opacity-0 bg-black/50 backdrop-blur-lg inset-0 transition-all duration-500 z-10`}>
    <img src={`${require("../assets/other/" + "text_logo.webp")}`} alt="logo-pjsk" className="w-[25vh] m-2  relative filter-none pointer-events-none"/>
    <div className={`${isOpen?'translate-x-0':''} w-[35%] translate-x-full h-full bg-white p-4 transition-all duration-150 `}>
        <div className="flex flex-col">
            <a>ssssss</a>
            <a>ssssss</a>
            <a>ssssss</a>
            <a>ssssss</a>
        </div>
    </div>
    </div>
    {conditionalNav}
    </>
)
}
export default Navbar