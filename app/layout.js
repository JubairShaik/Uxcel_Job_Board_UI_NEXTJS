import './globals.css'
 
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";

export const metadata = {
  title: 'Learning & Assessment Platform',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
    <body> 
      <Topbar/>

      <main className='flex flex-row '>
        <LeftSidebar />

         <section className=' sm:p-3 p-5 my-[3rem] sm:mt-[5rem]  w-full'>
            <div className='w-full mt-3'>{children}</div>
         </section>
        
        <RightSidebar />
      </main>

      <Bottombar />
    </body>
  </html>
  )
}



 