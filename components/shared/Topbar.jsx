 
import Image from "next/image";
import Link from "next/link";





function Topbar() {
  return (
    <nav className='topbar'>

      <Link href='/' className='flex items-center gap-2'>
        <Image src='/vishnulogo.png' alt='logo' width={36} height={36} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Vedic</p>
      </Link>

      <div className='flex  justify-center  items-center   gap-2'>
        <div className=' flex items-center gap-6'>

            {/* if we re signed in then only show the sign out btn */}
       
              <div className='flex gap-2  p-1 m-1 cursor-pointer'>
                <Link href="/profile">
                <Image
                className="bg-slate-700 p-1 rounded-full  "
                src='/assets/user.svg'
                alt='logout'
                width={29}
                height={29}
                />
                </Link>
                 
              </div>
  
        </div>

        
      </div>
    </nav>
  );
}

export default Topbar;
