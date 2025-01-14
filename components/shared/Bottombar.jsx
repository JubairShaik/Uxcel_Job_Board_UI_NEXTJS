"use client"

import Image from "next/image";
import Link from "next/link";
 

import { usePathname, useRouter } from "next/navigation"; //hooks

import { sidebarLinks } from "@/constants";



const Bottombar = () => {

    const router = useRouter()
    const pathname = usePathname()
  return (
    <div className="bottombar">
        <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) || // if the len is > 1 means its not just home route
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && "bg-primary-500 "}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className='text-light-1  text-subtle-medium max-sm:hidden'>{link.label.split(/\s+/)[0]}</p>
            </Link>
          );
        })}
        </div>
       
    </div>
  )
}

export default Bottombar
