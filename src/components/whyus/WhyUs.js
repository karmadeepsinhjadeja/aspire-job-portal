import React from 'react';
import left from '../../assets/Left.png';

function WhyUs() {
  return (<div className="flex relative w-full justify-center bg-white mt-32">
    <div className="mt-16 mb-16 w-full lg:w-3/5 px-4 lg:px-0" style={{ fontFamily: "Montserrat" }}>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img src={left} alt={left} className="w-full lg:w-auto" />
        </div>
        <div className="flex flex-col ml-0 lg:ml-32 mt-0 lg:mt-20 w-full lg:w-1/2">
          <div className="text-orange-500 text-center lg:text-left">Why Choose Us?</div>
          <div className="text-3xl lg:text-5xl text-[#31416C] font-bold mt-4 lg:mt-10 text-center lg:text-left">
            World of talent at your Fingertips
          </div>
          <div className="text-base mt-4 lg:mt-16 text-[#999999] text-center lg:text-left">
            It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand. It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand. It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default WhyUs
