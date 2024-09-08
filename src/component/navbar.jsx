import React, { useRef } from "react";
import { useState,useEffect } from "react";
import { Turn as hamburger } from "hamburger-react";

function Navbar(){
    const [isDekstopScreen,setDekstopScreen]=useState(window.innerWidth >= 1024)
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
        if(prevScrollPost.current>currentScrollPost){
            NavbarRef.current.classList.add('bg-slate-400')
            NavbarRef.current.classList.add('opacity-100')
            NavbarRef.current.classList.add('translate-y-0')
        }
        else{
            NavbarRef.current.classList.remove('opacity-100')
            NavbarRef.current.classList.remove('translate-y-0')
            NavbarRef.current.classList.add('-translate-y-full')
            NavbarRef.current.classList.add('opacity-0')
            NavbarRef.current.classList.add('bg-pink-400')
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
        <div className="bg-slate-100 bg-opacity-30 flex items-center justify-between z-10 w-full fixed p-2 top-0 opacity-100 translate-y-0 transition-all duration-300" ref={NavbarRef}>
            <p>contoh Gambar</p>
            <div className="flex">
                <a>Home</a>
                <a>Sekai</a>
                <a>News</a>
                <a>Game</a>
            </div>
        </div>)
    }
    function Navbar(){
        return(
            <div className="bg-slate-100 bg-opacity-30 flex items-center justify-between z-10 w-full fixed p-2 top-0 opacity-100 translate-y-0 transition-all duration-300" ref={NavbarRef}>
            <p>contoh Gambar</p>
            <div className="flex">

            </div>
        </div>)
        
    }
    const conditionalNav=isDekstopScreen?<DekstopNav/>:<Navbar/>
    return(
    <>
    {conditionalNav}
    </>
)
}
export default Navbar