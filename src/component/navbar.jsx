import React, { useRef } from "react";
import { useState,useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";

function Navbar(){
    const [isDekstopScreen,setDekstopScreen]=useState(window.innerWidth >= 1024)
    const [isOpen,setIsOpen]=useState(false)
    console.log(isOpen);
    
    console.log(isDekstopScreen);
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
            NavbarRef.current.classList.add('bg-slate-400','opacity-100','translate-y-0')
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
            <img src={`${require("../assets/other/" + "Logo.png")}`}/>
            <div className="flex">
                <a>Home</a>
                <a>Sekai</a>
                <a>News</a>
                <a>Game</a>
            </div>
        </div>
        <div className="fixed bg-white right-0 my-auto p-4 z-10 top-[50%] rounded-tl-xl rounded-bl-xl">
            <img src={`${require("../assets/other/" + "appicon.png")}`} className="h-10 w-28 my-2 cursor-pointer"/>
            <img src={`${require("../assets/other/" + "playicon.png")}`} className="h-10 w-28 my-2 cursor-pointer"/>
        </div>
        </>)
    }
    function Navbar(){
        return(
        <div className="bg-slate-100 bg-opacity-30 flex items-center justify-between z-10 w-full fixed p-2 top-0 opacity-100 translate-y-0 transition-all duration-300" ref={NavbarRef}>
            <img src={`${require("../assets/other/" + "Logo.png")}`} className="w-40"/>
            <Hamburger toggle={setIsOpen} toggled={isOpen}/>
        </div>)
        
    }
    const conditionalNav=isDekstopScreen?<DekstopNav/>:<Navbar/>
    return(
    <>
    {conditionalNav}
    {isOpen&&(
        <>
        <div className="bg-black w-full h-full z-40">
            <p onClick={setIsOpen(false)} className="text-white absolute bottom-0">close</p>
        </div>
        </>
    )}
    </>
)
}
export default Navbar