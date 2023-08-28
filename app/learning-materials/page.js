import React from "react";
import CourseBanner from "@/components/courses/CourseBanner";
import { job_listings } from "@/constants";

import Image from "next/image";
import Filter from "@/components/Filter";

const JobCard = ({
  company,
  posted,
  position,
  location,
  employment_type,
  index,
  icon,
}) => (
  <div
    className={`flex sm:flex-row flex-col sm:p-6  p-4 cursor-pointer  bg-slate-100  shadow-md m-4 justify-between items-start  sm:items-center rounded-[20px] ${
      index !== job_listings.length - 1 ? "mb-6" : "mb-0"
    }  
      
    `}
  >
    <div className={`w-[64px] h-[64px] rounded-full  flex items-center justify-center `}>
      <Image src={icon} alt="star" height={30} width={30}   />
    </div>

    <div className="flex-1 flex flex-col  sm:ml-3 ">
      <p className=" font-normal text-slate-500 text-[14px] leading-[24px]">
        {company}
      </p>
      <h4 className="font-poppins font-semibold mt-1 text-slate-900  text-[14px] md:text-[18px] leading-[23.4px] mb-1">
        {position}
      </h4>

      <div className=" gap-4  flex ">
        <p className=" font-normal text-slate-500 text-[10px] sm:text-[14px] leading-[24px]">
          •{location}
        </p>
        <p className="font-normal text-slate-500 text-[10px] sm:text-[14px] leading-[24px]">
          {employment_type}
        </p>
      </div>
    </div>

    <p className=" font-normal text-slate-400 text-[14px] leading-[24px]">
      {posted}
    </p>
  </div>
);

const page = () => {
  return (
    <main className="head-text text-left">
      {/* <Lessons/> */}

      <div className=" mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
          <div className="lg:col-span-8 col-span-1  space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-[1.4rem]  md:text-3xl  p-3 mt-4  md:ml-6 font-semibold text-violet-500">
                All Jobs
              </h1>
            </div>
            {job_listings.map((job, index) => (
              <JobCard
                key={job.id}
                {...job}
                index={index}
                active={index === 0}
              />
            ))}
          </div>
          <div className="lg:col-span-4   col-span-1">
            <div className="lg:sticky relative top-[2rem]  md:top-[5rem]  p-2">
              <Filter />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
