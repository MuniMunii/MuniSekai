import React, { useEffect } from "react";
import { Carousel, Flowbite } from "flowbite-react";
function GameplayInfo() {
  const currentTheme = {
    carousel: {
      root: {
        base: "relative h-full w-full ",
        leftControl:
          "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
        rightControl:
          "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      },
      indicators: {
        active: {
          off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
          on: "bg-pink-700 dark:bg-gray-800",
        },
        base: "h-3 w-3 rounded-full opacity-0",
        wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
      },
      item: {
        base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 ",
        wrapper: {
          off: "w-full flex-shrink-0 transform cursor-default snap-center",
          on: "w-full flex-shrink-0 transform cursor-grab snap-center ",
        },
      },
      control: {
        base: "inline-flex opacity-0 h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
        icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
      },
      scrollContainer: {
        base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        snap: "snap-x",
      },
    },
  };
  console.log(<Carousel />);

  return (
    <>
      <div className="box-parallax h-[90vh] w-full flex items-center border-blue-700 border relative">
        <div className="parallaxed h-96 max-w-[800px] w-[80%] mx-auto border border-transparent">
          <Flowbite theme={{ theme: currentTheme }}>
            <Carousel
              slide={true}
              leftControl=""
              rightControl=""
              slideInterval={5000}
            >
              <div
                className=" w-full h-full border bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${require("../assets/room/" +"bg_room_airi.jpg")})`,
                }}
              >
                <img
                  src={`${require("../assets/char/" + "bnw_kohami.png")}`}
                  className="absolute bottom-0 left-6 size-40"
                />
                <h1 className="parallaxed absolute bottom-0 right-0 font-bold min-[648px]:text-6xl text-4xl text-themeGreen">
                  Live Concert
                </h1>
              </div>
            </Carousel>
          </Flowbite>
        </div>
      </div>
    </>
  );
}
export default GameplayInfo;
