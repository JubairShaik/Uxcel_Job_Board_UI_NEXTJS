 
import  Image  from 'next/image';
 
 import Link from "next/Link"

function CompanyDetails({company}) {
  

  return (
    
    <div className="bg-white p-6 rounded-2xl">
      <div className=" flex flex-col ">
      <Image src={company.companyLogo} className="rounded-full"  width={110} height={110} />

      <div className="flex items-center gap-5 mt-5">
        <h2>{company?.name}</h2>
        <Link href={company.companyLink}> 
        <Image src={company.src}   className="rounded-full"    width={20} height={20} />
        </Link>
      </div>

      <div className=" mt-4 ">
        <p className="text-[0.8rem] md:text-[1rem] text-slate-800 font-thin" >{company?.description}</p>

        <h2 className="text-[01rem] mt-8 md:text-[1rem] space-y-3  text-slate-900 font-bold" >Company Details 
        <p className="text-[0.8rem] md:text-[1rem] text-slate-800 mt-3 font-thin" > • {company?.industry}</p>
        <p className="text-[0.8rem] md:text-[1rem] text-slate-800 font-thin" > • {company?.size}</p>

        </h2>

      </div>


       
      </div>
    </div>
  );
}

export default CompanyDetails ;
