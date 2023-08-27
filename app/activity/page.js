import React from "react";
import CourseBanner from "@/components/courses/CourseBanner";
import { cardData, features } from "@/constants";

import Image from "next/image";
import Certificate from "@/components/courses/Certificate";

const LessonCard = ({ icon, title, content, index, totalLessons, active }) => (
  <div
    className={`flex flex-row sm:p-6 px-3  cursor-pointer  bg-slate-200  m-4 justify-between items-center rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }  
   
    ${
      active
        ? "border-4  border-violet-500   shadow-lg bg-white"
        : "border-2 opacity-70 border-violet-300"
    }  
    `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full  flex items-center justify-center `}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-slate-900  text-[13px] md:text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>

      <div className="sm:flex gap-4 hidden">
        <p className=" font-normal text-slate-500 text-[14px] leading-[24px]">
          {content}
        </p>
        <p className="font-normal text-slate-500 text-[14px] leading-[24px]">
          {totalLessons} Lessons
        </p>
      </div>
    </div>

    {!active ? (
      <Image src="/lock.png" width={20} height={20} alt="image" />
    ) : (
      <Image src="/bitcoin.png" width={20} height={20} alt="image" />
    )}
  </div>
);

const page = () => {
  return (
    <main className="head-text text-left">
      <CourseBanner
        name={cardData[0]?.courseName}
        courseInfo={cardData[0]?.courseInfo}
        paraentStyles="flexCenter mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 "
        childStyles="md:text-4xl sm:text-2xl xs:text-xl  text-center"
      />

      {/* <Lessons/> */}

      <div className=" mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
          <div className="lg:col-span-8 col-span-1  space-y-4">
            <span className="text-sm md:text-start text-center ">Level 1 </span>
            <div className="flex items-center justify-between">
              <h1 className="text-[1rem] md:text-xl font-semibold text-violet-500">
                Getting Started with BlockChain{" "}
                <span className="bg-yellow-500 p-1 font-normal text-black text-sm rounded-lg">
                  Free
                </span>
              </h1>
            </div>
            {features.map((feature, index) => (
              <LessonCard
                key={feature.id}
                {...feature}
                index={index}
                active={index === 0}
              />
            ))}
          </div>
          <div className="lg:col-span-4   col-span-1">
            <div className="lg:sticky relative top-[2rem]  md:top-[5rem]  p-2">
              <Certificate />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
