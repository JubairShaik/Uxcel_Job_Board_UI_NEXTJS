"use client";

import { Fragment, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Listbox, Transition } from '@headlessui/react';
import {
    ChevronDownIcon
     
  } from "@heroicons/react/20/solid";
  
  
 

const CustomFilter = ({ title, options, setFilter } ) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value);
        }}
      >
        <div className="relative w-fit z-10">


          <Listbox.Button className="custom-filter__btn  ">

            
            <span className="block truncate">{selected.title}</span>
            <Image 
              src="/arrow.png" 
              width={15}
              height={15}
              className="ml-4 object-contain"
              alt="  up down"
            />
          </Listbox.Button>

          
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options bg-pink-500 ">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) => `relative cursor-default select-none py-2 px-4 ${
                    active ? 'bg-blue-600 text-white' : 'text-gray-900'
                  }`}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter