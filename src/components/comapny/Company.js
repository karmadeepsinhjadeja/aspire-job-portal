import React from "react";
import circle from "../../assets/circle-solid.svg";
import shape from "../../assets/Shape.png";
import payoneer from "../../assets/payonner.png";
import medium from "../../assets/medium.png";
import linkedin from "../../assets/linkedin.png";
import macdonald from "../../assets/mac.png";

function Company() {
  const data = [
    {
      image: payoneer,
      name: "Payoneer",
    },
    {
      image: medium,
      name: "Medium ",
    },
    {
      image: linkedin,
      name: "Linkedin",
    },
    {
      image: macdonald,
      name: "MacDonald's",
    },
  ];

  return (
    <div className="flex relative w-full justify-center bg-[#fef1e9]">
      <div className="mt-16 mb-16 w-full max-w-5xl px-4" style={{ fontFamily: "Montserrat" }}>
        <div className="flex flex-col">
          <div className="md:w-full">
            <div className="text-[#31416C] text-right"><a href="#">Explore more</a></div>
            <img src={shape} alt=" " className="mx-auto md:ml-96 my-4 md:my-0" />
          </div>
          <div className="text-[#31416C] text-4xl font-bold relative text-center md:text-left mt-4 md:mt-0">
            Top Companies
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {data.map((e, index) => (
            <div
              className="flex flex-col p-6 border bg-white rounded-2xl shadow-2xl w-full  sm:w-1/2 md:w-1/4 lg:w-1/5 "
              key={index}
            >
              <div className="flex justify-center ">
                <img src={e.image} alt={e.name} className="h-20 w-20 object-contain" />
              </div>
              <div className="text-center mt-6 text-[#31416C] font-bold">
                {e.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company;
