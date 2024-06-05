import React from "react";
import account from "../../assets/account.png";
import profile from "../../assets/profile.png";
import job from "../../assets/job.png";
function Steps() {
  const data = [
    {
      image: account,
      title: "Create Account",
      desc: "It's very easy to open an account and start journey",
    },
    {
      image: profile,
      title: "Complete Your Profile",
      desc: "Complete your profile with all the info to get attention of client ",
    },
    {
      image: job,
      title: "Apply Job or Hire",
      desc: "Apply & get your preferable jobs with all the requirements and get it.",
    },
  ];
  return (
    <div className="flex relative w-[100vw] justify-center bg-[#fef1e9] mt-32">
      <div className="mt-16 mb-16 w-[60%]" style={{ fontFamily: "Montserrat" }}>
        <div className="flex-row">
          <div>
            <div className="text-[#31416C] text-4xl font-bold text-center justify-center  relative flex flex-row">
              How it's work ?
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-20 ml-20 mt-20">
          {data.map((e, index) => {
            return (
              <div className="flex flex-col  w-1/4" key={index}>
                <div className="flex justify-center">
                  <img src={e.image} alt={e.image} className=""></img>
                </div>
                <div className=" mt-4 text-[#31416C] font-bold text-center">
                  {e.title}
                </div>
                <div className="text-grey font-light text-center ">
                  {e.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Steps;
