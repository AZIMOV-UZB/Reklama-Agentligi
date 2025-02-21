import React from 'react'
import Image from 'next/image';
import Watch from "@/components/watch/Watch";
import logo from "@/components/assets/logo.jpg";
import Boob from "@/components/boob/Boob"
<img src="/logo.jpg" alt="Company Logo" width="150" height="50" fetchpriority="high" />

const component = () => {
  return (
    <div className=' bg-blue-700 header mb-5 py-3'>  
    <div  className='header container flex justify-between text-white items-center text-xl font-bold'>
<Image
  className="w-[70px] h-[70px] rounded-[50px]"
  src={logo} 
  alt="foto"
/>   
 <Watch/>
<Boob/>
    </div>
    </div>
  )
}

export default component