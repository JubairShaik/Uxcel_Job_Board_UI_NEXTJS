import React from "react";
import CourseBanner from "@/components/courses/CourseBanner";
import {  related_jobs  , job_details } from "@/constants";

import Image from "next/image";
import Filter from "@/components/Filter";
import CompanyDetails from '@/components/CompanyDetails';
import JobDetails from '@/components/JobDetails';
import JobCard from '@/components/JobCard';
import ApplyButton from './../../components/ApplyButton';
 
 


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
    <main className="head-text bg-white md:bg-slate-200 text-left">
      {/* <Lessons/> */}

      <div className=" pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
          <div className="lg:col-span-9 col-span-1  space-y-4">
            

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

            <div className=" relative top-[2rem] mb-5  md:top-[.5rem]  p-2">
            {job_details.map((job, index) => (
              <CompanyDetails
                key={job.id}
                {...job}
                index={index}
                // ApplyButton
              />
            ))}
            </div>

            <div className=" relative lg:sticky top-[2rem]  md:top-[.5rem]  p-2">
            {job_details.map((job, index) => (
              <ApplyButton
                key={job.id}
                {...job}
                index={index}
              />
            ))}
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
