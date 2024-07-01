import React,{useState} from "react";
import logo from "../../assets/logo.png"
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";


function Header() {

    const [nav,setNav] = useState(false);

    const handleNav = ()=>{
        setNav(!nav)
    }

    return(
        <div className=" absolute top-0 left-0 flex justify-between items-center h-16 bg-transparent text-black shadow-sm w-full "
        style={{fontFamily:'Montserrat'}}>
            <div className="pt-8 pl-8">
                <img src={logo} alt="logo" className="h-20 mt-5"/>
            </div>
            <div className="flex justify-center items-center w-2/3 mt-5 text-xl pt-8">
                <ul className="hidden md:flex">
                <li href="#" className="p-4">Home</li>
                <li href="#" className="p-4">Job Listing</li>
                <li href="#" className="p-4">Recruiters</li>
                <li href="#" className="p-4">Companies</li>
                <li href="#" className="p-4">Contact Us</li>
                </ul>
            </div>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
            </div>
            <div className={`fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-white pl-8 ease-in-out duration-500 ${nav? 'md:hidden block':'hidden'}`}> 

            <img src={logo} alt="logo" className="h-20  "/>

                <ul className="p-4">
                <li href="#" className="p-4 border-b">Home</li>
                <li href="#" className="p-4 border-b">Job Listing</li>
                <li href="#" className="p-4 border-b">Recruiters</li>
                <li href="#" className="p-4 border-b">Companies</li>
                <li href="#" className="p-4 ">Contact Us</li>
                </ul>
            </div>   
            <div className="mt-5 hidden md:hidden lg:flex pt-8">
                <button className="bg-transparent text-[#1A2C5C]  py-2 px-4 rounded-full mr-4 border border-[#1A2C5C]">Login / Sign Up</button>
                <button className=" bg-[#F26F1F] text-white  py-2 px-4 rounded-full ">Post a Job</button>
            </div>

        </div>
    );

}

export default Header;
