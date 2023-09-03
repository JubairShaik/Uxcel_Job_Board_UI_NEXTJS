import Image from "next/image";

import JobCard from "@/components/JobCard";
import Chart from "@/components/Chart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const JobDeatils = ({
  position,
  company,
  seniorityLevel,
  jobType,
  responsibilities,
  thanksMessage,
}) => (
  <section className="flex flex-col sm:p-6  p-4 cursor-pointer  bg-white  md:shadow-md m-1 sm:m-4 justify-between   rounded-[20px]  ">
    <div
      className={`flex sm:flex-row flex-col  my-3  items-center  mb-4 sm:mb-6 justify-between md:items-start  `}
    >
      <div className="flex-1 flex flex-col    items-center md:items-start text-center sm:text-start mt-12 md:mt-0  space-y-3 sm:ml-3 ">
        <Image
          src="/comp.png"
          width={65}
          height={65}
          className="flex rounded-full items-center justify-center  md:hidden"
        />

        <p className=" font-normal text-slate-400 mt-2 tracking-wider  text-[12px] leading-[24px]">
          JOB DESCRIPTION
        </p>
        <h2
          className="font-bold  font-sora sm:text-[32px]  text-slate-800  md:leading-100 leading-80     text-[1.34rem]  
           sm:text-start text-center "
        >
          {position}
        </h2>

        <div className=" gap-1 md:gap-3   flex ">
          <p className=" font-normal text-slate-800  font-inter text-[12px] sm:text-[14px] leading-[24px]">
            {company?.workplace} |
          </p>
          <p className="font-normal text-slate-800  font-inter text-[12px] sm:text-[14px] leading-[24px]">
            {company?.location}
          </p>

          <p className="font-normal text-slate-800  font-inter text-[12px] sm:text-[14px] leading-[24px]">
            •{jobType}
          </p>

          <p className="font-normal text-slate-800  font-inter text-[12px] sm:text-[14px] leading-[24px]">
            •{seniorityLevel}
          </p>
        </div>

        <button className=" px-4 max-w-auto   flex md:hidden rounded-[10px] py-2  bg-[#3700fd] text-white  text-sm  md:text-lg font-semibold  ">
          # Fast Apply
        </button>
      </div>

      <p className=" font-normal lg:flex items-center mt-3 hidden font-inter text-slate-500  text-[14px] leading-[24px]">
        Posted 6 days ago
      </p>
    </div>

    <div className=" hidden md:flex justify-between  mx-auto md:mx-4   items-center ">
      <button className=" px-4  rounded-[13px] py-2     max-w-auto bg-[#3700fd] text-white  text-sm  md:text-lg font-semibold  ">
        # Fast Apply
      </button>

      <div className="flex items-center gap-1">
        <p className="font-normal font-inter text-slate-400 text-[14px] sm:text-[17px] leading-[24px]">
          Share on
        </p>

        <button
          className="bg-white text-blue-500  p-2 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </button>
        <button
          className="bg-white text-blue-500  p-2 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </button>
        <button
          className="bg-white text-pink-400 p-2  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <FontAwesomeIcon icon={faDribbble} />
        </button>
        <button
          className="bg-white text-slate-800  p-2 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>

    <Chart />

    <div className="flex items-center  flex-col">
      <p className=" font- text-md text-center text-sm mt-2  ">
        {" "}
        Specify your career preferences and get a personalized match score{" "}
      </p>

      <button className=" px-5  rounded-lg py-2 my-3 sm:mt-6  max-w-auto bg-[#3700fd] text-white  text-sm  md:text-lg font-semibold  ">
        Add Career Preference
      </button>
    </div>

    <div className="my-3 space-y-2">
      <h2 className="text-black text-[1rem] font-bold md:text-[1.3rem]">
        About Grapheec:
      </h2>
      <p className="text-[16px] select-none  font-thin pb-2 md:pb-5  text-slate-700  md:text-[20px]">
        {company?.description}
      </p>
      <h2 className="text-black text-xl font-bold md:text-[1.3rem]   pb-4 md:pb-8  ">
        Position: {position}
      </h2>

      <h2 className="text-black text-[1rem] font-bold  md:text-[1.3rem] my-3 md:my-5">
        Responsibilities:
      </h2>
      <ul className=" text-[16px]  font select-none font-thin text-slate-700 md:text-[20px]">
        {responsibilities.map((responsibility, index) => (
          <li key={index}> - {responsibility}</li>
        ))}
      </ul>

      <h2 className="text-black text-[1rem] font-bold md:text-[20px]   pt-4 md:pt-8  ">
        {" "}
        {thanksMessage}
      </h2>
    </div>
  </section>
);

export default JobDeatils;
