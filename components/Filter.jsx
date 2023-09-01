"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {  maxSalary , minSalary } from "@/constants";

import CustomFilter from "./CustomFilter";

import { Squares2X2Icon } from "@heroicons/react/20/solid";
 
const Inputs = [
  { label : "Keyword" ,
   placeholder : " Company, job title .... "
  },
  { label : "Location" ,
   placeholder : " Country "
  },
]







const filters = [
  {
    id: "Seniority-Level",
    name: "Seniority Level",
    options: [
      { value: "Junior", label: "junior", checked: false },
      { value: "Mid Level", label: "Mid Level", checked: false },
      { value: "Senior", label: "Senior", checked: true },
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
      { value: "Contract", label: "Contract", checked: true },
      { value: "Internship", label: "Internship", checked: false },
    ],
  },
];

 

function Filter() {

  
  const [year, setYear] = useState(2022);

  return (
    <div className="bg-white m-2 rounded-2xl px-2   shadow-md   lg:px-5 ">
      <div>
        <main className="mx-auto max-w-7xl  ">
          <section className="pb-24  flex     pt-6">
            <div className=" flex">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className=" text-[1.3rem] text-black  font-semibold">Filter</h3>



                  {Inputs.map((inputs)=>(

                <div className="w-[90%] flex flex-col    ">
                  <div className=" flex  flex-col    mt-6">
                    <div className=" w-full ">
                      <label className="block text-gray-500 font-bold  text-left text-sm   md:mb-0  ">
                       {inputs.label}
                      </label>
                    </div>
                    <div className="  w-full ">
                      <input
                        className="bg-gray-200 p-3 rounded-lg appearance-none border-2 text-sm border-gray-200  w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder={inputs.placeholder}
                        id="inline-full-name"
                        type="input"
                      />
                    </div>

                    
                  </div>
                  
                </div>
                  ))}
                  <div className="flex items-center mt-4">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label className="ml-3 text-sm flex   text-gray-600 w-full ">
                        Remote Jobs
                      </label>
                    </div>

                {filters.map((section) => (
                  <>
                    <div className="pt-6 ">
                      <div className="space-y-4  w-full  ">
                        <p className=" text-[.8rem]  font-semibold ">
                          {section.name}
                        </p>

                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              defaultChecked={option.checked}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm flex   text-gray-600 w-full "
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ))}

                <h2 className="text-sm ">Salary Range</h2>
                
                <div className="flex items-center justify-between gap-2    ">


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

                <button className=" px-5  rounded-md py-2 text-white w-[89%]  text-sm  md:text-md font-semibold bg-[#5627ff]">
                  Apply Filters
                </button>

                <button className=" px-5  rounded-md py-2 text-slate-400  w-[89%] text-sm  md:text-md font-semibold   hover:bg-slate-200">
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
