import Image from "next/image";

import Link from 'next/link';


function ApplyButton({ position, company, jobType }) {
  return (
    <div className="bg-white p-6  mt-10  rounded-2xl">
      <div className=" flex flex-col ">
        <div className=" mt- ">
          <h2 className="text-[01rem] mt-2 md:text-[1rem] space-y-3  text-slate-900 font-bold">
            {position}

            <p className=" font-normal text-slate-500 text-[10px] mt-6 sm:text-[14px] leading-[24px]">
              •{company?.workplace} | {company?.location}
            </p>

            <p className="font-normal text-slate-500 text-[10px] sm:text-[14px] leading-[24px]">
              •{jobType}
            </p>

            <button className=" px-5  rounded-lg py-2 my-3 sm:mt-6  w-full  bg-[#3700fd] text-white  text-sm  md:text-lg font-semibold  ">
              Apply Now
            </button>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ApplyButton;
