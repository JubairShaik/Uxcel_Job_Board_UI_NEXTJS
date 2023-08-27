import React from 'react';
import Image from 'next/image';

import  Link  from 'next/link';




const CourseCard = ({ imgURL, courseName, courseInfo, courseLevel, durationInHours, noOfLessons,slug }) => {
  // Split the courseInfo by newline characters
  const courseInfoLines = courseInfo?.split('\n');

  // Extract the first two lines
  const truncatedCourseInfo = courseInfoLines?.slice(0, 2).join(' ');

  return (
 
    <div className="bg-slate-100 p-[24px] flex  gap-3 items-center md:items-start flex-row md:flex-col rounded-2xl max-h-[252px] w-full md:max-w-[410px] shadow-md">

      <div className="mb-2">
        <Image src={imgURL} width={60} height={60} alt={courseName} />
      </div>

      <div>
        <h2 className="lg:text-xl md:text-md text-sm font-semibold text-gray-800">{courseName}</h2>
        <div className="hidden lg:flex ">
        <p className="text-gray-600  text-justify text-sm mt-2 line-clamp-2">{truncatedCourseInfo}</p>
        </div>

       <div className="flex items-start gap-2 justify-start my-1 md:flex-col ">
       <p className="text-gray-500 text-sm  ">  {courseLevel}</p>
        <p className="text-gray-500 text-sm">  {durationInHours} hours</p>
       </div>

       </div>

    </div>
     
  );
}

export default CourseCard;
