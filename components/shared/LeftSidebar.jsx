"use client";

import Image from "next/image";
import Link from "next/link";
// import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";

import { usePathname, useRouter , useParams} from "next/navigation"; //hooks

import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useParams();

  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>

        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) || // if the len is > 1 means its not just home route
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500 "}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>
      
        {/* the same signout btn used in topBar */}
      <div className='mt-10 px-6'>
     
            <div className='flex cursor-pointer gap-4 p-4'>
              <Image
                src='/assets/logout.svg'
                alt='logout'
                width={26}
                height={26}
              />

              <button className='text-light-2 max-lg:hidden'>Logout</button>
            </div>
     
      </div>
    </section>
  );
};

export default LeftSidebar;
