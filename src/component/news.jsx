import React from "react";
function NewsComp(){
    return (
        <>
        <div className="w-full">
        <div className="w-[90%] my-auto h-screen mx-auto py-3 flex justify-center md:flex-row flex-col items-center">
            <div className="image-border opacity-0 translate-y-full duration-500 transition-transformborder border-blue-100 w-full h-[275px] mx-6">border</div>
            <div className="flex flex-col justify-start border h-[275px] border-red-400 w-full">
            <h1 className="pb-3 pl-3 border border-b-blue-200 text-left text-6xl">News</h1>
                <div className="news-list py-3 text-left px-2 border-b-2 border-green-500 border-dotted">box2</div>
                <div className="news-list py-3 text-left px-2 border-b-2 border-green-500 border-dotted">box1</div>
            </div>
        </div>
        </div>
        </>
    )
}
export default NewsComp