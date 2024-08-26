import React from "react";
import '../styles/rotatingPhone.css'
function RotatingPhone(){
    return (
        <>
        <div className="w-full h-full bg-slate-950 flex flex-col justify-center items-center z-50 absolute overflow-hidden">
            {/* luar hp/outer body */}
            <div className="rotating-phone bg-gray-800 w-20 h-32 flex flex-col justify-center items-center relative rounded-md">
                {/* kamera/camera */}
                <div className="bg-black w-0 h-0 rounded-full self-start p-1 absolute top-1 left-1"></div>
                {/* layar/screen */}
                <div className="bg-white w-16 h-24 rounded-sm"></div>
                {/* home button */}
                <div className="absolute bottom-0 bg-white w-0 h-0 p-1 top-[92%] rounded-xl"></div>
            </div>
            <p className="text-white">Pls rotate your phone for better view</p>
        </div>
        </>
    )
}
export default RotatingPhone