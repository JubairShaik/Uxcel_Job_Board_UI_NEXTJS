import React from "react";
import { job_details } from "@/constants";
import { TbFlag3 } from "react-icons/tb";
import { RiShareForwardLine } from "react-icons/ri";
import { FcFlashAuto } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";

const JobDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 ">
      <div className="w-8/12 min-h-screen px-16 py-8 border-r">
        {job_details.map((item) => (
          <div>
            <div className="border-b pb-8">
              <div className="flex items-center justify-between">
                <h1 className="text-md text-gray-500 uppercase tracking-wide">
                  Job Posting
                </h1>
                <h1 className="text-gray-500">{item?.posted}</h1>
              </div>
              <h1 className="text-5xl font-bold mt-4">{item?.designRole}</h1>
              <h1 className="mt-5 opacity-60">
                {item?.company?.workplace} | {item?.company?.location} •{" "}
                {item?.jobType} • {item?.seniorityLevel}
                {}
              </h1>
            </div>
            <div className="flex items-center justify-between py-5 border-b">
              <button className="bg-[#5627FF] text-white font-bold px-4 py-3 rounded-lg">
                Apply Now
              </button>
              <div className="flex text-3xl gap-5 opacity-50">
                <span className="rounded-lg hover:bg-gray-200 p-2">
                  <TbFlag3 />
                </span>
                <span className="rounded-lg hover:bg-gray-200 p-2">
                  <RiShareForwardLine />
                </span>
              </div>
            </div>
            <div className="my-14 py-10 bg-[#e6e6e6] flex flex-col items-center w-full rounded-md text-center">
              <FcFlashAuto className="text-6xl" />
              <h1 className="text-2xl font-bold tracking-tight mb-2">
                Discover your best matches
              </h1>
              <h1 className="text-md opacity-50">
                Specify your career preferences and get a<br /> personalized job
                matching score.
              </h1>
              <button className="bg-[#5627FF] text-white font-bold px-6 mt-3 py-3 rounded-lg">
                Add Carrer Preferences
              </button>
            </div>
            <div>
              <h1 className="text-4xl font-bold">{item?.contract}</h1>
              <h1 className="text-3xl font-semibold mt-10">
                <span className="font-bold">Location:</span>
                {item?.location}
              </h1>
              <h1 className="text-2xl font-bold my-10">
                WE MAKE FUN...FUNNER.
              </h1>
              <h1 className="text-2xl  opacity-70 font-extralight">
                We are Full Circle, and we're all about having fun and making
                great games that people want to play with their friends. As the
                developers of Skate™, we are set to provide an experience that
                embraces and builds upon everything our community found special
                about the previous games. We believe in creating an inclusive
                world inside and outside of our games for our players and our
                team. As a geo-diverse studio, our team members around the globe
                can either work from home, in the office or a hybrid of both.
              </h1>
              <h1 className="my-12 text-2xl opacity-70 italic">
                "This position is open to qualified individuals anywhere in the
                Americas where EA operates as an employer."
              </h1>
              <h1 className="text-2xl opacity-70">
                We are looking for a UX Designer to help on this endeavor. You
                will report to the Associate UX Director. In this role you will
                partner with a team of designers , product managers, engineers
                and artists to bring creation abilities to a wide range of
                players. This role requires an understanding of both the
                gameplay and UI/UX needs of our players.
              </h1>
            </div>
            <div>
              <h1 className="text-2xl font-bold my-10">Responsibilities</h1>
              <ul className="list-disc text-black px-4 text-2xl opacity-80">
                {item?.responsibilities.map((i) => (
                  <li className="my-1">{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-bold my-10">Qualifications</h1>
              <ul className="list-disc px-4 text-2xl opacity-80">
                {item?.qualifications.map((i) => (
                  <li className="my-1">{i}</li>
                ))}
              </ul>
            </div>
            <div className="my-10">
              <h1 className="text-2xl  opacity-70 font-extralight">
                We are Full Circle, and we're all about having fun and making
                great games that people want to play with their friends. As the
                developers of Skate™, we are set to provide an experience that
                embraces and builds upon everything our community found special
                about the previous games. We believe in creating an inclusive
                world inside and outside of our games for our players and our
                team. As a geo-diverse studio, our team members around the globe
                can either work from home, in the office or a hybrid of both.
              </h1>
              <h1 className="my-12 text-2xl opacity-70 italic">
                "This position is open to qualified individuals anywhere in the
                Americas where EA operates as an employer."
              </h1>
              <h1 className="text-2xl opacity-70">
                We are looking for a UX Designer to help on this endeavor. You
                will report to the Associate UX Director. In this role you will
                partner with a team of designers , product managers, engineers
                and artists to bring creation abilities to a wide range of
                players. This role requires an understanding of both the
                gameplay and UI/UX needs of our players.
              </h1>
            </div>
            <div className="flex items-center justify-between py-5 border-b border-t">
              <button className="bg-[#5627FF] text-white font-bold px-4 py-3 rounded-lg">
                Apply Now
              </button>
              <div className="flex text-3xl gap-5 opacity-50">
                <span className="rounded-lg hover:bg-gray-200 p-2">
                  <TbFlag3 />
                </span>
                <span className="rounded-lg hover:bg-gray-200 p-2">
                  <RiShareForwardLine />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-4/12 py-8 pr-16"
        style={{
          position: "sticky",
          top: "90px",
          maxHeight: "calc(110vh - 16px)",
          overflowY: "auto",
        }}
      >
        <div className="pb-10 border-b">
          <div className="w-16 h-16 bg-black rounded-full"></div>
          {job_details.map((item) => (
            <div>
              <h1 className="text-2xl font-bold my-5">{item?.company?.name}</h1>
              <h1 className="text-xl opacity-80">{item?.sidedesc}</h1>
              <div className="flex items-center gap-2 opacity-70 mt-8">
                <FaRegUser />
                <h1 className="opacity-50">{item?.company?.size}</h1>
              </div>
              <div className="flex items-center gap-2 opacity-70 mt-3">
                <BsBuildingsFill />
                <h1 className="opacity-50">{item?.company?.industry}</h1>
              </div>
              <button className="border w-full py-3 rounded-md mt-7 hover:bg-gray-200 font-bold">
                Visit Website
              </button>
            </div>
          ))}
        </div>
        <div className="py-8">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Apply Now</h1>
            <h1 className="text-[#3700FD] font-bold">Job Expired? </h1>
          </div>
          <h1 className="opacity-50 py-3">
            Start your journey to finding your next amazing work opportunity.
          </h1>
          <button className="bg-[#5627FF] text-white font-bold w-full py-3 rounded-lg">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
