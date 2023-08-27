import React from 'react'

 

import { cardData } from "@/constants";
import  Image  from 'next/image';





const Certificate = () => {
  return (


    <div className="bg-violet-200 p-[24px]  mb-14 bg-blue-600 flex  h-full  items-center md:items-start flex-row md:flex-col rounded-2xl  w-full   shadow-md">

     

      <div>



        <div className="flex items-center gap-3 justify-center">
 
        <Image src={cardData[0].imgURL} width={30} height={30} alt={cardData[0].imgURL} />
      
        <h2 className="lg:text-xl text-xl font-normal sm:font-semibold text-gray-800">{cardData[0].courseName}</h2>
        </div>

 
       <div className="flex items-start justify-start my-1    flex-col ">

       <Image src="/certificate.png" width={500} height={300} alt={cardData[0].imgURL} />

             <div className="hidden sm:block">
             <p className="text-purple-600  p-1 text-[.8rem] md:text-[1rem]  ">
              {" "}
              {cardData[0].courseLevel}
            </p>
            <p className="text-purple-600  p-1  text-[.8rem] md:text-[1rem] ">
              {" "}
              {cardData[0].durationInHours} hours{" "}
            </p>
            <p className="text-purple-600  p-1 text-[.8rem] md:text-[1rem] ">
              {" "}
              {cardData[0].noOfLessons} Lessons{" "}
            </p>
             </div>
       </div>

       <button 
             className=" px-5  rounded-md py-2 text-white  w-full text-sm  md:text-lg font-semibold bg-violet-500"
             >
                Start Learing for Free
             </button>

       </div>

    </div>
     
  )
}

export default Certificate
