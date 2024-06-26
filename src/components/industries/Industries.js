import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import dollor from "../../assets/dollar-sign-solid.svg";
import dollor from "../../assets/Group 34256.png"
import car from "../../assets/car-on rent.png"
import shape from "../../assets/Shape.png"
import hospital from "../../assets/hospital.png"
import att from "../../assets/att.png"
function Industries() {

    const data=[
        {
            "image":dollor,
            "name":"ICICI BANK LTD",
            
        },
        {
            "image":car,
            "name":"CAR ON RENT",
            
        },
        {
            "image":hospital,
            "name":"HOSPITAL",
            
        },
        {
            "image":att,
            "name":"ATT",
            
        },
        {
            "image":dollor,
            "name":"AXIS BANK LTD",
            
        }
    ]

  return (
    <div className="flex relative w-full justify-center bg-white">
    <div className="mt-16 mb-16 w-full md:w-3/5" style={{ fontFamily: "Montserrat" }}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-full">
          <div className="text-[#31416C] text-right"><a href="#">Explore more</a></div>
          <img src={shape} alt=" " className="mx-auto md:ml-96 my-4 md:my-0" />
          <div className="text-[#31416C] text-4xl font-bold relative text-center md:text-left mt-4 md:mt-0">
            Featured Industries
          </div>
        </div>
      </div>
  
      <div className="flex flex-wrap gap-4 mt-8 md:mt-20 w-full justify-center md:justify-start">
        {
          data.map((e, index) => {
            return (
              <div className="flex flex-col p-6 md:p-10 border hover:border-orange-500 rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
                key={index}>
                <div className="flex justify-center">
                  <img src={e.image} alt={e.image} className="h-16 w-16" />
                </div>
                <div className="mt-6 text-center text-xs font-bold">
                  {e.name}
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  </div>
  

  );
}

export default Industries;
