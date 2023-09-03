"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { maxSalary, minSalary } from "@/constants";

import CustomFilter from "./CustomFilter";

import { Squares2X2Icon } from "@heroicons/react/20/solid";

const Inputs = [
  { label: "Keyword", placeholder: " Company, job title .... " },
  { label: "Location", placeholder: " Country " },
];

const filters = [
  {
    id: "Seniority-Level",
    name: "Seniority Level",
    options: [
      { value: "Junior", label: "Junior", checked: false },
      { value: "Mid Level", label: "Mid Level", checked: false },
      { value: "Senior", label: "Senior", checked: false },
      {
        value: "Expert & Leadership",
        label: "Expert & Leadership",
        checked: false,
      },
    ],
  },
  {
    id: "Job-Type",
    name: "Job Type",
    options: [
      { value: "Full time", label: "Full time", checked: false },
      { value: "Part Time", label: "Part Time", checked: false },
      { value: "Contract", label: "Contract", checked: false },
      { value: "Internship", label: "Internship", checked: false },
    ],
  },
];

function Filter() {
  const [year, setYear] = useState(2022);

  return (
    <div className=" bg-white m-4 rounded-2xl px-2 font-inter    shadow-md   lg:px-6 ">
      <div>
        <main className="mx-auto w-full bg-blue-500  ">
          <section className="py-6  flex ">
            <div className=" flex">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className=" text-[1.3rem] text-black  font-inter font-bold">
                  Filter
                </h3>

                {Inputs.map((inputs) => (
                  <div className="w-full flex flex-col    ">
                    <div className=" flex  flex-col mt-4">
                      <div className=" w-full   ">
                        <label className="block mt-2   text-gray-500 font-bold  text-left text-[.9rem]   md:mb-2  ">
                          {inputs.label} 
                        </label>
                      </div>


                      <div className=" w-full   ">
                        <input
                          className="bg-[#F3F3F3] py-2 px-2  rounded-[10px] appearance-none border-2 text-[1rem] border-gray-200  w-full text-gray-500  focus:outline-none focus:bg-white focus:border-purple-500"
                          placeholder={inputs.placeholder}
                          type="input"
                        />
                      </div>



                    </div>
                  </div>
                ))}
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded outline-none shadow-inner hover:border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="ml-3 text-sm flex   text-gray-900 w-full ">
                    Remote OK
                  </label>
                </div>

                {filters.map((section) => (
                  <>
                    <div className="pt-4 ">
                      <div className="space-y-2  w-full  ">
                        
                        <p className=" text-[14px]   mt-1 text-gray-500  text-left   font-semibold ">
                          {section.name}
                        </p>

                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center gap ">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              defaultChecked={option.checked}
                              className="h-6 rounded-md  w-6  cursor-pointer   border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-2 text-sm flex    cursor-pointer   font-weight-[200] text-gray-800 w-full "
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ))}

                <h2 className="text-sm mt-5 font-bold text-slate-500 ">Salary Range</h2>

                <div className="flex items-center justify-between gap-2 my-4    ">
                  <CustomFilter
                    title="year"
                    options={minSalary}
                    setFilter={setYear}
                  />

                  <CustomFilter
                    title="year"
                    options={maxSalary}
                    setFilter={setYear}
                  />
                </div>

                <button className=" px-5  rounded-[10px] py-2 mt-3 text-white w-full  text-sm  md:text-md font-semibold bg-[#5627ff]">
                  Apply Filters
                </button>

                <button className=" px-5   rounded-[10px]  py-2   mt-4 text-slate-400  w-full  text-sm  md:text-md font-semibold   hover:bg-slate-200">
                  Reset Filters
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Filter;
