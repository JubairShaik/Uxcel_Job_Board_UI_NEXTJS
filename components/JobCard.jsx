

import { job_listings } from "@/constants";

import Image from "next/image";

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
    className={`flex sm:flex-row flex-col sm:p-6  p-4 cursor-pointer  bg-white shadow-md m-4 justify-between items-start  sm:items-center rounded-[20px] ${
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

    <p className="   text-slate-400 text-[14px]  font-thin  leading-[24px]">
      {posted}
    </p>
  </div>
);


export default JobCard