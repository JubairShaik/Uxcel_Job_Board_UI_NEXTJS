

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
    className={`flex sm:flex-row  gap-3 flex-col sm:p-6  p-4 cursor-pointer   bg-white m-3 md:ml-7  hover:shadow-md    justify-between items-start   rounded-[20px] ${
      index !== job_listings.length - 1 ? "mb-6" : "mb-0"
    }  
      
    `}
  >
    <div className={`md:w-[64px] md:h-[64px] w-[48px] h-[48px]  rounded-full  flex items-center justify-center `}>
      <Image src={icon} alt="star" height={64} width={64}   />
    </div>

    <div className="flex-1 flex flex-col  sm:ml-3 ">


      <p className=" font-normal font-inter text-slate-900   text-[14px] leading-[24px]">
        {company}
      </p>
      <h4 className="font-inter font-bold mt-1 text-slate-900   text-[14px] md:text-[16px] leading-[23.4px] mb-1">
        {position}
      </h4>

      <div className=" gap-1 font-inter  text-slate-500 font-normal  flex ">
        <p className="   text-[10px]  sm:text-[12px] leading-[24px]">
          {location}
        </p>
        <p className="font-normal text-gray-500 text-[10px] sm:text-[12px] leading-[24px]">
        • {employment_type}
        </p>
      </div>
    </div>

    <p className="   font-inter  text-gray-400  text-[14px]  font-weight-[200] leading-[24px]">
      {posted}
    </p>
  </div>
);


export default JobCard