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
    <div className="flex relative w-[100vw] justify-center bg-white">
      <div
        className=" mt-16 mb-16 w-[60%] "
        style={{ fontFamily: "Montserrat" }}
      >
        <div className="flex-row">
          <div>
            <div className="text-[#31416C] text-right"><a href="#">Explore more</a></div>
            <img src={shape} alt=" " className='ml-96'/>
            <div className="text-[#31416C] text-4xl font-bold  relative">
              Featured Industries
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-4 ml-20 mt-20 w-full ">

        {
            data.map((e,index)=>{
           return(
            <div className="flex flex-col  p-10 border hover:border-orange-500 rounded w-1/6  "
            key={index}>
            <div className="flex justify-center ">
              <img src={e.image} alt={e.image} className="size-10" />
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
