import React from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import Bejk from '@/components/assets/bejk.jpg';
import Book from '@/components/assets/book.jpg';
import Vizitka from '@/components/assets/vizitka.webp';
import Shtender from '@/components/assets/shtender.jpg';

import Rub from '@/components/assets/rub.jpg';
const contentStyle = {
  height: '450px',
  color: '',
  lineHeight: '30px',
  textAlign: 'center',
  background: '#364d79',
};

const MyCarousel = () => (
  <div className='container '>

  <Carousel autoplay >
    <div>
        
      <Image
       style={contentStyle}
       className="w-full h-full"
       src={Rub} 
       alt="foto"
/> 
    </div>
    <div>
      <Image
       style={contentStyle}
       className="w-full h-full"
       src={ Vizitka} 
       alt="foto"
/>  
    </div>
    <div>
        <Image
       style={contentStyle}
       className="w-full h-full"
       src={Bejk} 
       alt="foto"
/>  
    </div>
    <div>
        <Image
       style={contentStyle}
       className="w-full h-full"
       src={Book} 
       alt="foto"
/>  
    </div>
    <div>
        <Image
       style={contentStyle}
       className="w-full h-full object-contain
       "
       src={Shtender} 
       alt="foto"
/>  
    </div>
  </Carousel>
       </div>
);

export default MyCarousel;
