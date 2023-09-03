import React from "react";
import CourseBanner from "@/components/courses/CourseBanner";
import { job_listings } from "@/constants";

import Image from "next/image";
import Filter from "@/components/Filter";
import JobCard from '@/components/JobCard';







const page = () => {
  return (
    <main className=" pb-6  mt-14 md:mt-4 ">
    
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">





          <div className="lg:col-span-9 col-span-1  space-y-4">

            
            <div className="flex items-center justify-between gap-3">

              <h1 className="text-[1.2rem] md:text-[20px] font-inter  font-bold p-1 mt-4 ml-3  md:ml-6 
                text-black ">
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


          
          <div className="lg:col-span-3 col-span-1">
            <div className=" relative top-[2rem]  md:top-[.5rem]    mr-2">
              <Filter />
            </div>
          </div>
        </div>
     
    </main>
  );
};

export default page;
