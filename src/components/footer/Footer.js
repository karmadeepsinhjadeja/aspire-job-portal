import React from "react";
import backgroundImage from "../../assets/footer-image.png"
import location from "../../assets/location-add.png"
import sms from "../../assets/sms-tracking.png"
import call from "../../assets/call-calling.png"


function Footer() {
  return (
    <div className="mt-32 h-[60vh] " style={{ backgroundImage: `url(${backgroundImage})` , fontFamily:"Montserrat" }}>
      <div className=" flex flex-row  " >
        <div className="flex px-36 py-20 font-bold text-5xl text-white">
        Contact with Our Recruiter</div>
        {/* <div className="flex  ">
        <button className="text-sm bg-[#F26F1F] text-white h-10 w-20 py-2 px-4 rounded-full justify-end">
                Apply
              </button>

        </div> */}
      </div>
      <div className="flex flex-row  bottom-0 h-[100%] bg-[#1A2C5C] text-white">
        <div className=" text-xl w-[35%] px-20 py-20 font-extralight"  >
          <div className="font-semibold">Aspire</div>
          <br />
          
          It only takes 5 minutes . Set-up is smooth and simple, with fully
          customisable page design to reflect your brand.
        </div>
        <div className=" text-lg w-[15%] py-20">
          <div className="text-2xl font-bold " style={{ fontFamily: "Montserrat" }}>
            Links
            <br />
            <br />
          </div>
          <div className="font-extralight">
            <ul>
              <li className="p">
                About Us
                <br />
              </li>
              <li className="py-3">
                Terms and Condition <br />
              </li>
              <li className="py-3">
                About Us
                <br />
              </li>
              <li className="py-3">
                Terms and Condition <br />
              </li>
            </ul>
          </div>
        </div>

        <div className=" text-lg w-[15%] py-20">
          <div className="text-2xl font-bold " >
            Browse
            <br />
            <br />
          </div>
          <div className="font-extralight">
            <ul>
              <li className="p">
                Candidate List
              
              </li>
              <li className="py-3">
                Company List
              </li>
              <li className="py-3">
                Recruiters List
                
              </li>
              <li className="py-3">
                Job Listing  
              </li>
            </ul>
          </div>
        </div>
        <div className="text-lg w-[35%] p-20 ">
        <div className="text-2xl font-bold ">
            Contact Us
            <br />
            <br />
          </div>
          <div className=" font-extralight ">
            <ul>
              <li className="">
                <div className="flex flex-row "><div className="mt-1"><img src={location} alt={location}/></div>
               <div className="ml-3">Aspire B/204, Ahmedabad, Gujarat 380055</div></div>
                
              </li>
              <li className="py-3">
              <div className="flex flex-row "><div className="mt-1"><img src={sms} alt={sms}/></div>
               <div className="ml-3">info@aspire.com</div></div>
              </li>
              <li className="py-3">
              <div className="flex flex-row "><div className="mt-1"><img src={call} alt={call}/></div>
               <div className="ml-3">+91-1234567890</div></div>
              
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
