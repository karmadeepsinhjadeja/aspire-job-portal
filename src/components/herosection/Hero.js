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
            <form>
              <label
                for="large"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Select Skill
              </label>
              <select
                id="large"
                className="block w-full px-2 py-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 F dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Developer</option>
                <option value="GD">Graphics Designer</option>
                <option value="MAR">Marketing</option>
              </select>
            </form>
          </div>
          <div className="flex w-72 flex-col gap-6">

          <form>
              <label
                for="large"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Select Location
              </label>
              <select
                id="large"
                className="block w-full px-2 py-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 F dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Ahmedabad</option>
                <option value="VA">Vadodra</option>
                <option value="BRD">Baroda</option>
                <option value="RAJ">Rajkot</option>
              </select>
            </form>
            
          </div>
          <div>
            
              
            <button className="bg-[#1A2C5C] text-white  py-2 px-4 rounded ml-4 mt-4" >
              Search
            </button>
            
          </div>
        </div>
        <div className="flex items-center justify-center">
          <form>
        {/* <input className="bg-[#1A2C5C] text-white  py-2 px-4 rounded ml-4 mt-4" type="file"/> */}
          <button
            className="bg-white text-[#1A2C5C] text-sm  py-1 px-2 rounded"
            type="upload"
          >
            Upload your CV
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
