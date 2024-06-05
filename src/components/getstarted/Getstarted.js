import React from "react";
import thought from "../../assets/thought.png";
import play from "../../assets/play.png";

function Getstarted() {
  return (
    <div className="flex relative w-[100vw] justify-center bg-white">
      <div
        className=" mt-16 mb-16 w-[60%] "
        style={{ fontFamily: "Montserrat" }}
      >
        <div
          className="flex mt-32 w-[60vw] h-[85vh] bg-cover bg-gradient-to-l "
          style={{ backgroundImage: `url(${thought})` }}
        >
          <div className="w-[80%] "></div>
          <div className="flex flex-col font-bold text-4xl text-orange-500 mt-20">
            <img src={play} alt="" className="size-12 flex justify-center  " />
            <br />
            Let's Get Started <br />
            it's Simple
            <div className="text-black text-sm font-normal">
              <br />
              Get access to our top 1% talent as well as a complete set of
              hybrid workforce management tools.
            </div>
          </div>
        </div>
        {/* <div className="flex  w-full h-24 absolute bottom-16 text-xl ">
          <div className="flex flex-row bg-grey w-1/4">
            <div className="w-[150%] bg-black"></div>
            <div className="w-[150%] bg-red-400">2</div>
            <div className="w-[130%] bg-green-400">3</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Getstarted;
