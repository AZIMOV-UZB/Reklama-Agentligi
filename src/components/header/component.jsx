import React from 'react'
// import Image from 'next/image';
import Watch from "@/components/watch/Watch";
// import logo from "@/components/assets/logo.svg";
import Boob from "@/components/boob/Boob"

const component = () => {
  
  <meta property="og:image" content="https://telegra.ph/file/2c5a373c8b64f2d6558d8.png" />
  return (
    <div className=' bg-blue-700 header mb-5 py-4'>  

    <div  className='header container flex justify-between text-white items-center text-xl font-bold'>

<a href="/">
{/* <Image
  className="w-[120px] h-[150px] rounded-[50px]"
  src={logo} 
  alt="foto"
/>    */}
<p className='text-xl'>FATH PRINT</p>
</a>
 <Watch/>
<Boob/>
    </div>
    </div>
  )
}

export default component
