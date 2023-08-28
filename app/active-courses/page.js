import CourseCard from "@/components/courses/CourseCard";
import { cardData } from "@/constants";
import Link from "next/link";
import Image from "next/image";
 


export default function page() {
  return (
    <main className="head-text p-1  md:p-5 ">
      <h2>Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-10 p-3 ">
        {cardData.map((card, index) => (
          <Link
            key={index}
            href={`/active-courses/${card.slug}`}
            className="cursor-pointer"
          >
            <CourseCard {...card} key={card.courseName} />
          </Link>
        ))}
      </div>
    </main>
  );
}
