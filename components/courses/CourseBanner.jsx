import React from "react";
import { cardData } from "@/constants";
import Image from "next/image";

const CourseBanner = () => {
  return (
    <div className="relative w-full rounded-2xl  items-center z-0 overflow-hidden md:bg-violet-600 md:text-white flexCenter  mb-6  p-6  md:p-8 ">
      <div className="  flex md:flex-row-reverse  flex-col  gap-10 items-center justify-center ">

      <div className=" flex items-center justify-center filter drop-shadow-2xl md:w-[500px]   w-[300px] flex-auto">
          <Image
             className=" shadow-purple-100"
            src={cardData[0].imgURL}
            width={200}
            height={200}
            alt={cardData[0].imgURL}
          />
        </div>

        <div className="flex flex-col w-full h-full ">



        <span
            className={`  text-sm leading-100  
      sm:text-start text-center mb-2 `}
          >
            {" "}
             Course
          </span> 


          <h2
            className={`font-semibold text-slate-900 md:text-slate-100 text-2xl leading-100 md:text-4xl sm:text-2xl  
           sm:text-start text-center `}
          >
            {" "}
            {cardData[0].courseName}
          </h2>
          <p className="text-xl mt-3 sm:block hidden leading-8 ">{cardData[0].courseInfo}</p>


          
          <div className="flex items-center md:items-start  gap-6 justify-center md:justify-start my-1   ">
            <p className="text-purple-600 md:text-slate-200 text-[.8rem] md:text-[1rem]  ">
              {" "}
              {cardData[0].courseLevel}
            </p>
            <p className="text-purple-600 md:text-slate-200 text-[.8rem] md:text-[1rem] ">
              {" "}
              {cardData[0].durationInHours} hours{" "}
            </p>
            <p className="text-purple-600 md:text-slate-200 text-[.8rem] md:text-[1rem] ">
              {" "}
              {cardData[0].noOfLessons} Lessons{" "}
            </p>
          </div>

          <div className="flex items-center md:items-start mt-4  gap-6 justify-center md:justify-start my-1   ">
             <button 
             className=" px-5  rounded-md py-2 text-slate-600  text-sm md:text-lg font-semibold bg-slate-200"
             >
                Start Learing for Free
             </button>
          </div>


        </div>

       
      </div>
    </div>
  );
};

export default CourseBanner;

 