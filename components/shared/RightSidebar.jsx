"use client"

import React from 'react';
import { useState } from "react";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation"; //hooks

const RightSidebar = () => {

  const [open, setIsOpen] = useState(false);

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  return (
    <section className={`custom-scrollbar rightsidebar
    ${open ? 'open' : 'closed'}`}>
      {open && (
        <div className='flex flex-1 flex-col px-10 pb-6 justify-start'>
          <button
            className="text-white bg-slate-500 rounded-full p-3  my-5 grid items-center"
            onClick={handleCloseSidebar}
          >
            close
          </button>
          
          <h3 className='text-heading4-medium text-light-1'>
            Upcoming Deadlines
          </h3>
        </div>
      )}
    </section>
  );
}

export default RightSidebar;
