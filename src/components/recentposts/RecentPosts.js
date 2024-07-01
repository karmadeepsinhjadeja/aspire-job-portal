import React from "react";
import shape from "../../assets/Shape.png";
import next from "../../assets/next.png";
import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";
import post3 from "../../assets/post3.png";

function RecentPosts() {
  const data = [
    {
      "image": post1,
      "date":"23 July 2024",
      "title": "Challenge yourself and win the future.",
      "desc": "This response is important for our ability to learn from mistakes but words..",
    },
    {
      "image": post2,
      "date":"23 July 2024",
      "title": "Challenge yourself and win the future.",
      "desc": "This response is important for our ability to learn from mistakes but words..",
    },
    {
      "image": post3,
      "date":"23 July 2024",
      "title": "Challenge yourself and win the future.",
      "desc": "This response is important for our ability to learn from mistakes but words..",
    },
  ];
  return (
    <div className="flex relative w-full justify-center bg-white mt-32">
  <div className="mt-16 mb-16 w-full lg:w-3/5 px-4 lg:px-0" style={{ fontFamily: "Montserrat" }}>
    <div className="flex-row">
      <div>
        <div className="text-[#31416C] text-right">Explore more</div>
        <img src={shape} alt=" " className="ml-64" />
        <div className="text-[#31416C] text-4xl font-bold text-center relative flex flex-row">
          Recent Posts
        </div>
      </div>
    </div>

    <div className="flex flex-wrap content-center text-center lg:flex-nowrap gap-x-0 lg:gap-x-20 mt-20">
      {data.map((e, index) => {
        return (
          <div className="flex flex-col w-full  lg:w-1/2 mb-8 lg:mb-0" key={index}>
            <div
              className="flex h-64 w-80 mx-auto lg:h-[40vh] border rounded-2xl shadow-2xl"
              style={{ backgroundImage: `url(${e.image})` }}
            ></div>
            <div className="mt-3 font-thin text-grey">{e.date}</div>
            <div className="mt-4 text-[#31416C] font-bold">
              {e.title}
            </div>
            <div className="text-grey font-light">
              {e.desc}
              <img className="mx-auto" src={next} alt={next} />
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>
  );
}

export default RecentPosts;
