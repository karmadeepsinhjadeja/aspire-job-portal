import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import location from "../../assets/location-dot-solid.svg";
import google from "../../assets/google.png";
// import wallet from "../../assets/wallet-solid.svg";
import mscard from "../../assets/mastercard.png"
import marketing from "../../assets/marketing.png"
import java from "../../assets/java.png"
import product from "../../assets/product.png"

function Recent() {

  const data=[
    {
        "image":mscard,
        "name":"Developer & Expert in Java C++",
        "shift":"Night Shift",
        "vacancy":"Current Vacancy: 3"
        
    },
    {
      "image":google,
      "name":"Animator and Expert in Maya 3D",
      "shift":"Night Shift",
      "vacancy":"Current Vacancy: 4"
        
    },
    {
      "image":marketing,
      "name":"Marketing Specialist in SEO & SMM",
      "shift":"Night Shift",
      "vacancy":"Current Vacancy: 3"
        
    },
    {
      "image":java,
      "name":"Developer & Expert in Java C++",
      "shift":"Night Shift",
      "vacancy":"Current Vacancy: 3"
        
    },
    {
      "image":product,
      "name":"Lead and Project Designer",
      "shift":"Night Shift",
      "vacancy":"Current Vacancy: 3"
        
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
            <div className="text-[#31416C] text-4xl font-bold  relative">
              Recent Jobs
            </div>
          </div>
        </div>
        {/* List */}
        <div className="flex flex-col mt-20 ">
  {        
          data.map((e,index)=>{
            return(
              <div className="flex flex-row p-10 border " key={index}>
            <div className="">
              <img src={e.image} alt="" className="" />
            </div>
            <div className="ml-10 font-bold ">{e.name}</div>
            <div className="ml-32 text-xs">
              {e.shift}
              <br />
              Rs 20000-50000
            </div>
            <div className="flex flex-row ml-16 text-xs">
              <div>
                <img src={location} alt="" className="size-3" />
              </div>
              <div>
                Spain,Barcelona
                <br />
                {e.vacancy}
              </div>
            </div>
            <div className="ml-32">
              <button className="text-sm bg-[#F26F1F] text-white  py-2 px-4 rounded-full">
                Apply
              </button>
            </div>
          </div>
            )
          })
        }
        </div>

        
      </div>
    </div>
  );
}

export default Recent;
