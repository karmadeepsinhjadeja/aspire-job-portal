import React from "react";
import logo from "../../assets/logo.png"



function Header() {
    return(
        <div className=" absolute top-0 left-0 flex justify-between items-center h-16 bg-transparent text-black shadow-sm w-full"
        style={{fontFamily:'Montserrat'}}>
            <div className="pl-8">
                <img src={logo} alt="logo" className="h-10"/>
            </div>
            <div className="flex justify-center items-center w-2/3">
                <a href="#" className="px-4">Home</a>
                <a href="#" className="px-4">Job Listing</a>
                <a href="#" className="px-4">Recruiters</a>
                <a href="#" className="px-4">Companies</a>
                <a href="#" className="px-4">Contact Us</a>
            </div>
            <div className="">
                <button className="bg-transparent text-[#1A2C5C]  py-2 px-4 rounded-full mr-4 border border-[#1A2C5C]">Login / Sign Up</button>
                <button className=" bg-[#F26F1F] text-white  py-2 px-4 rounded-full ">Post a Job</button>
            </div>

        </div>
    );

}

export default Header;
