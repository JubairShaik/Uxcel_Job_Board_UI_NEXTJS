import Image from 'next/image';



export default function Home() {
  return (
     <main className="head-text text-left">Welcome to Vedic 
       
      <div className="m-4">
      <Image src="/cartoon.svg" width={450} height={450} alt="image" />
      </div>
  
     </main>
  )
}


