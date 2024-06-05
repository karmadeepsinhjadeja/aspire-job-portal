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
    <div className="flex relative w-[100vw] justify-center bg-[#fef1e9]">
      <div className="mt-16 mb-16 w-[60%]" style={{ fontFamily: "Montserrat" }}>
        <div className="flex-row">
          <div>
            <div className="text-[#31416C] text-right"><a href="#">Explore more</a></div>
            <img src={shape} alt=" " className="ml-72" />
            <div className="text-[#31416C] text-4xl font-bold  relative flex flex-row">
              Top Companies
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-20 ml-20 mt-20">
          {data.map((e, index) => {
            return (
              <div
                className="flex flex-col p-10 border bg-white rounded-2xl shadow-2xl w-1/5"
                key={index}
              >
                <div className="flex justify-center ">
                  <img src={e.image} alt={e.image} className="size-20" />
                </div>
                <div className="text-center mt-6 text-[#31416C] font-bold">
                  {e.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Company;
