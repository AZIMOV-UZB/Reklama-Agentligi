import React from 'react'
import Image from 'next/image';
 import bir from "../assets/bir.svg";
 import ikki from "../assets/ikki.svg";
 import uch from "../assets/uch.svg";
const Big = () => {
  return (
    <div className='container my-5'>
        <p className='text-center text-4xl font-bold text-white'>BORTTIRILGAN HARFLAR</p>

<div>
    <Image
  className="w-full h-full my-5"
  src={bir} 
  alt="foto"
/>   

<Image
  className="w-full h-full my-5"
  src={ikki} 
  alt="foto"
/>   

<Image
  className="w-full h-full my-5"
  src={uch} 
  alt="foto"
/>   
</div>
    </div>
  )
}

export default Big