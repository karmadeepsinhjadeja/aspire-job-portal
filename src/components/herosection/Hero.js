import React from "react";
import hero from "../../assets/bg-hero.png";

function Hero() {
  return (
    <div
      className="flex justify-center w-[100vw] h-[150vh] bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div
        className="w-[70%] h-[500px] bg-grey mt-16"
        style={{ fontFamily: "Montserrat" }}
      >
        <div className="font-bold text-6xl text-[#31416C] text-center my-20">
          Find Your Perfect <br />
          Job Match
        </div>
        <div className="text-[#31416C] text-center my-4">
          Jobs and Job search. Find jobs in global. Executive Jobs and work.
        </div>
        <div className="flex flex-row gap-x-2 justify-center py-20">
          <div className="flex w-72 flex-col gap-6">
            
            Dropdown 1

          </div>
          <div className="flex w-72 flex-col gap-6">Dropdown 2</div>
          <div>
            <button className="bg-[#1A2C5C] text-white  py-2 px-4 rounded">
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-white text-[#1A2C5C] text-sm  py-1 px-2 rounded"
            type="upload"
          >
            Upload your CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
