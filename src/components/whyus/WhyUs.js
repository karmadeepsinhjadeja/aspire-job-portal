import React from 'react';
import left from '../../assets/Left.png';

function WhyUs() {
  return (
    <div className="flex relative w-[100vw] justify-center bg-white mt-32">
      <div
        className=" mt-16 mb-16 w-[60%] "
        style={{ fontFamily: "Montserrat" }}
      >
        <div className='flex flex-row '>
            <div className='w-1/2'>
                <img src={left} alt={left} />
            </div>
            <div className='flex flex-col ml-32 mt-20 w-1/2'>
                <div className='text-orange-500'>Why Choose Us?</div>
                <div className='text-5xl text-[#31416C] font-bold mt-10'>World of talent at your Fingertips</div>
                <div className='text-base mt-16 text-[#999999]'>
                It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WhyUs
