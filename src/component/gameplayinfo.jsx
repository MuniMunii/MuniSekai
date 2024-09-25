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

  return (
    <>
      <div className="box-parallax h-[800px] w-full flex p-6 items-center relative ">
        <div className="parallaxed h-full  max-w-[1000px] w-[80%] mx-auto ">
          <Flowbite theme={{ theme: currentTheme }}>
            <Carousel
              slide={true}
              leftControl=""
              rightControl=""
              slideInterval={3000}
            >
              {/* slide 1 */}
              <div className="relative h-full flex items-center justify-center">
                <div
                  className=" w-full h-[28rem] max-h-full border max-[648px]:h-80 relative border-transparent overflow-visible"
                >
                  <img className="w-[95%] mx-auto h-full rounded-lg border border-black shadow-[4px_8px_14px_0px_rgba(247,250,252,0.5)]"
                    src={`${require("../assets/room/" + "VirtualLive.png")}`}
                  />
                  <div className="absolute bottom-0 right-0 z-10 parallaxed">
                    <h1 className="min-[648px]:text-6xl text-4xl parallaxed font-test text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                      Live Concert
                    </h1>
                    <p className="border rounded-xl border-transparent parallaxed bg-cyan-500/45 font-testDesc font-medium">
                      {" "}
                      a digital live concert using 3D models.
                    </p>
                  </div>
                  <img
                    src={`${require("../assets/char/" +
                      "mmj_miku.png")}`}
                    className="absolute -bottom-[20%] right-0 w-52 h-60 min-[648px]:w-72 min-[648px]:h-80 parallaxed"
                  />
                </div>
              </div>
                            {/* slide 2 */}
                            <div className="relative h-full flex items-center justify-center">
                <div
                  className=" w-full h-[28rem] max-h-full border max-[648px]:h-80 relative border-transparent overflow-visible"
                >
                  <img className="w-[95%] mx-auto h-full rounded-lg border border-black shadow-[4px_8px_14px_0px_rgba(247,250,252,0.5)]"
                    src={`${require("../assets/room/" + "Outfits.png")}`}
                  />
                  <div className="absolute bottom-0 right-0 z-10 parallaxed">
                    <h1 className="min-[648px]:text-6xl text-4xl parallaxed font-test text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-700">
                      Costumes
                    </h1>
                    <p className="border rounded-xl border-transparent parallaxed bg-blue-500/45 font-testDesc font-medium">
                      {" "}
                      Change costumes freely.
                    </p>
                  </div>
                  <img
                    src={`${require("../assets/char/" +
                      "bnw_vbs_len.png")}`}
                    className="kohami-para absolute -bottom-[20%] right-0 w-52 h-60 min-[648px]:w-72 min-[648px]:h-80 parallaxed"
                  />
                </div>
              </div>
                                          {/* slide 3 */}
                                          <div className="relative h-full flex items-center justify-center">
                <div
                  className=" w-full h-[28rem] max-h-full border max-[648px]:h-80 relative border-transparent overflow-visible"
                >
                  <img className="w-[95%] mx-auto h-full rounded-lg border border-black shadow-[4px_8px_14px_0px_rgba(247,250,252,0.5)]"
                    src={`${require("../assets/room/" + "Gameplay.png")}`}
                  />
                  <div className="absolute bottom-0 right-0 z-10 parallaxed">
                    <h1 className="min-[648px]:text-6xl text-4xl parallaxed font-test text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-200">
                      Gameplay
                    </h1>
                    <p className="border rounded-xl border-transparent parallaxed bg-purple-500/45 font-testDesc font-medium">
                      {" "}
                      Test your skill.
                    </p>
                  </div>
                  <img
                    src={`${require("../assets/char/" +
                      "bnw_Mizuki.png")}`}
                    className="kohami-para absolute -bottom-[20%] right-0 w-52 h-60 min-[648px]:w-72 min-[648px]:h-80 parallaxed"
                  />
                </div>
              </div>
            </Carousel>
          </Flowbite>
        </div>
      </div>
    </>
  );
}
export default GameplayInfo;
