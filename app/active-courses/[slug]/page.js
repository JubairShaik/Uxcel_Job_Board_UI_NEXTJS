  
import CourseCard from '@/components/courses/CourseCard';
// import {cardData} from "@/constants"

import  Link  from 'next/link';

import { useRouter } from "next/navigation"
import Image from 'next/image';
 



export default function page({ params }) {
  
  const slug = params.slug;
 
  return (
    <main className="head-text p-1 md:p-5 ">

      <h2>{slug}</h2>
  
    </main>
  )
}


