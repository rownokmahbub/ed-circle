import React from "react";
import {AiFillLinkedin} from 'react-icons/ai'
import { BsFacebook } from "react-icons/bs";
const Heros = () => {
  const service = [
    {
      img: "/assets/h1.svg",
      title: "Theresa Webb",
      sub: "Application Support Analyst Lead",
      promo: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      fb: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
    },
    {
      img: "/assets/h2.svg",
      title: "Theresa Webb",
      sub: "Application Support Analyst Lead",
      promo: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      fb: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
    },
    {
      img: "/assets/h3.svg",
      title: "Theresa Webb",
      sub: "Application Support Analyst Lead",
      promo: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      fb: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
    },  {
        img: "/assets/h3.svg",
        title: "Theresa Webb",
        sub: "Application Support Analyst Lead",
        promo: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        fb: "https://www.facebook.com/",
        twitter: "https://www.twitter.com/",
      },
  ];
  return (
    <div className="container mx-auto md:h-screen py-10">
      <p className="text-lg text-purple-500 text-center font-medium">Tutors</p>
      <p className="text-3xl font-semibold text-center py-3">Meet the Heroes</p>
      <p className="text-gray-500 text-base py-3 text-center w-[450px] mx-auto">
      On Ed-Circle, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-12 py-10">
        {service.map((ser, i) => {
          return (
            <div
              className="px-6 py-4 flex justify-center items-center flex-col rounded-xl bg-gray-50 shadow-lg border border-gray-200 hover:bg-purple-600 group "
              key={i}
            >
              <img className="w-full h-20" src={ser.img} alt="services" />
              <p className="text-xl group-hover:text-white font-semibold line-clamp-1">
                  {ser.title}
                </p>
              <p className="text-sm text-center text-purple-600 group-hover:text-white capitalize py-2">
                {ser.sub}
              </p>
             

              <p className="text-base text-center group-hover:text-white  py-2">
                {ser.promo}
              </p>
            <div className="flex gap-5 items-center">
            <a href={ser.fb} >
              <BsFacebook className="text-purple-500 hover:text-white"/>
              </a>
     
              <a href={ser.twitter}>
              <AiFillLinkedin className="text-purple-500 hover:text-white"/>
              </a> 
            </div>
        

           
            
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Heros;
