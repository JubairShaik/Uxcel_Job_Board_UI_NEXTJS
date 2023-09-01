import React from "react";
import CourseBanner from "@/components/courses/CourseBanner";
import {  related_jobs  , job_details } from "@/constants";

import Image from "next/image";
import Filter from "@/components/Filter";
import CompanyDetails from '@/components/CompanyDetails';
import JobDetails from '@/components/JobDetails';
import JobCard from '@/components/JobCard';
 
 


import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

 

const page = () => {
  return (
    <main className="head-text text-left">
      {/* <Lessons/> */}

      <div className=" mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
          <div className="lg:col-span-9 col-span-1  space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-[1.4rem]  md:text-3xl  p-3 mt-4  md:ml-6 font-semibold  text-black ">
                Job Details 
              </h1>
            </div>
            

            

 


          

            {job_details.map((job, index) => (
              <JobDetails
                key={job.id}
                {...job}
                index={index}
                active={index === 0}
              />
            ))}

          </div>

         
          <div className="lg:col-span-3 col-span-1">
            <div className=" relative top-[2rem]  md:top-[.5rem]  p-2">
              <CompanyDetails />
            </div>
          </div>



        </div>

        <h2 className="text-black text-[1rem] font-bold md:text-[1.3rem]  ml-5 mt-14 py-4 md:py-2  " >  Explore Similar Jobs</h2>

        <div className=" grid  grid-cols-1     md:grid-cols-2 " >

            {related_jobs.map((job, index) => (
              <JobCard
                key={job.id}
                {...job}
                index={index}
                active={index === 0}
              />
            ))}</div>
      </div>
    </main>
  );
};

export default page;
