 

import Image from "next/image";

import JobCard from '@/components/JobCard';
import Chart from '@/components/Chart';
 



const JobDeatils = ({
 
  position,
  company,
  seniorityLevel,
  jobType,
  responsibilities,
  thanksMessage

  
}) => (


  <section className="flex flex-col sm:p-6  p-4 cursor-pointer  bg-white  shadow-md m-4 justify-between   rounded-[20px]  " >


  <div
    className={`flex sm:flex-row flex-col  mb-3  sm:mb-8 justify-between items-start  `}
  >
    {/* <div className={`w-[64px] h-[64px] rounded-full  flex items-center justify-center `}>
      <Image src={icon} alt="star" height={30} width={30}   />
    </div> */}

    <div className="flex-1 flex flex-col  sm:ml-3 ">
      <p className=" font-normal text-slate-500 text-[14px] leading-[24px]">
      JOB DESCRIPTION
      </p>
      <h4 className="font-semibold  text-slate-800 text-2xl leading-100 md:text-4xl sm:text-2xl  
           sm:text-start text-center ">
        {position}
      </h4>

      <div className=" gap-1  flex ">
        <p className=" font-normal text-slate-500 text-[10px] sm:text-[14px] leading-[24px]">
          •{company?.workplace} |
        </p>
        <p className="font-normal text-slate-500 text-[10px] sm:text-[14px] leading-[24px]">
          {company?.location}
        </p>

        <p className="font-normal text-slate-500 text-[10px] sm:text-[14px] leading-[24px]">
           •{jobType}
        </p>
        
        <p className="font-normal text-slate-500 text-[10px] sm:text-[14px] leading-[24px]">
         •{seniorityLevel}
        </p>
      </div>
    </div>

    <p className=" font-normal text-slate-400 text-[14px] leading-[24px]">
    Posted 6 days ago
    </p>
  </div>


  <Chart/>
  
  <div className="flex items-center  flex-col">
      <p className=" font- text-md text-center text-sm mt-2  "> Specify your career preferences and get a personalized match score </p>

      <button className=" px-5  rounded-lg py-2 my-3 sm:mt-6    md:w-[30%] bg-[#3700fd] text-white  text-sm  md:text-lg font-semibold  ">
                   Add Career Preference
  </button>

  </div>

  <div className="my-3 space-y-2" >
     <h2 className="text-black text-[1rem] font-bold md:text-[1.3rem]" >About Grapheec:</h2>
     <p className="text-[16px] select-none  font-thin pb-4 md:pb-8  text-slate-700  md:text-[22px]" >{company?.description}</p>
     <h2 className="text-black text-xl font-bold md:text-[1.3rem]   pb-4 md:pb-8  " >Position: {position}</h2>
   

     <h2 className="text-black text-[1rem] font-bold  md:text-[1.3rem] my-3 md:my-5">
        Responsibilities:
      </h2>
      <ul className=" text-[16px]  select-none font-thin text-slate-700 md:text-[22px]">
        {responsibilities.map((responsibility, index) => (
          <li key={index}> - {responsibility}</li>
        ))}
      </ul>

      <h2 className="text-black text-[1rem] font-bold md:text-[1.3rem]   pt-4 md:pt-8  " > {thanksMessage}</h2>

      


  </div>


  
  </section>





);


export default JobDeatils