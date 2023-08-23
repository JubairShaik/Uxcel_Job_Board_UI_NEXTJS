import React from 'react'
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation"; //hooks



const RightSidebar = () => {
  return (
   <section className = "custom-scrollbar  rightsidebar" >
        <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>
           UpComing Deadlines 
        </h3>
       </div>
   </section>
  )
}

export default RightSidebar
