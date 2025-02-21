import React from 'react'
import { Button} from 'antd';
import { Image } from 'antd';
import Ban from '@/components/assets/ban.webp'

const Jobs = () => {
  return (
    <div className='container'>
      <p className="  text-center text-5xl font-bold  text-white">BIZNING
      XIZMATLAR</p>
      <div className='justify-between grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 p-5 z-0'>
        <a  href="banner">
      <Button type="primary">BANNER</Button>
        </a>
        <a  href="shtendir">
      <Button type="primary">SHTENDIR</Button>
        </a>

        <a  href="arakal">
      <Button type="primary">ARAKAL</Button>
        </a>
        <a  href="vizitka">
      <Button type="primary">VIZITKA</Button>
        </a>
        <a  href="flaer">
      <Button type="primary">FLAER</Button>
        </a>
        <a  href="setka">
      <Button type="primary">SETKA</Button>
        </a>
        <a  href="menu">
      <Button type="primary">MENU</Button>
        </a>
        <a  href="bilboard">
      <Button type="primary">BILBOARD</Button>
        </a>
      </div>

      <div className=' mb-10 justify-between grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 z-0'>

        <div className='hover:scale-105  bg-slate-100'>
    <Image
    className='foto w-full'
    src="https://avatars.mds.yandex.net/i?id=20fdd11f971bc095a2e92aefa0e0c9dc_l-5480389-images-thumbs&ref=rim&n=13&w=1200&h=1200"
  />
  <div className='p-2'>
  <p className=' text-2xl font-bold my-2'>BANNER </p>
          <a href="banner">
      <Button type="primary">Bo'limga o'tish</Button>            
          </a>
  </div>
        </div>

        <div className='hover:scale-105  bg-slate-100'>
    <Image
    className='foto w-full'
    src="https://avatars.mds.yandex.net/i?id=5ba4dadc568a96fa38e042982dab94ab79a08799-10871820-images-thumbs&n=13"
  />
  <div className='p-2'>
  <p className=' text-2xl font-bold my-2'>SHTENDIR </p>
          <a href="shtendir">
      <Button type="primary">Bo'limga o'tish</Button>            
          </a>
  </div>
        </div>

        <div className='hover:scale-105  bg-slate-100'>
    <Image
    className='foto w-full'
    src="https://avatars.mds.yandex.net/i?id=cee109a6a0846976ffa2b08fea3585f3_l-5910758-images-thumbs&ref=rim&n=13&w=1080&h=1080"
  />
  <div className='p-2'>
  <p className=' text-2xl font-bold my-2'>ARAKAL</p>
          <a href="arakal">
      <Button type="primary">Bo'limga o'tish</Button>            
          </a>
  </div>
        </div>


        <div className='hover:scale-105  bg-slate-100'>
    <Image
    className='foto w-full'
    src="https://i.ebayimg.com/images/g/shIAAOSwjARckZw8/s-l1600.jpg"
  />
  <div className='p-2'>
  <p className=' text-2xl font-bold my-2'>VIZITKA</p>
          <a href="vizitka">
      <Button type="primary">Bo'limga o'tish</Button>            
          </a>
  </div>
        </div>


        <div className='hover:scale-105  bg-slate-100'>
    <Image
    className='foto w-full'
    src="https://avatars.mds.yandex.net/get-altay/1868686/2a00000188963400ad1842b97f6ba7c94852/XXL_height"
  />
  <div className='p-2'>
  <p className=' text-2xl font-bold my-2'>FLAER</p>
          <a href="flaer">
      <Button type="primary">Bo'limga o'tish</Button>            
          </a>
  </div>
        </div>


        <div className='hover:scale-105  bg-slate-100'>
    <Image
    className='foto w-full'
    src="https://avatars.mds.yandex.net/i?id=0ad9c0bd1e81992e545e41e90bfdc5ad_l-5877516-images-thumbs&ref=rim&n=13&w=850&h=574"
  />
  <div className='p-2'>
  <p className=' text-2xl font-bold my-2'>SETKA</p>
          <a href="setka">
      <Button type="primary">Bo'limga o'tish</Button>            
          </a>
  </div>
        </div>

        <div className='hover:scale-105  bg-slate-100'>
    <Image
    className='foto w-full'
    src="https://static.tildacdn.com/tild6265-6635-4430-a338-643138633461/image.png"
  />
  <div className='p-2'>
  <p className=' text-2xl font-bold my-2'>MENU</p>
          <a href="menu">
      <Button type="primary">Bo'limga o'tish</Button>            
          </a>
  </div>
        </div>

        <div className='hover:scale-105  bg-slate-100'>
    <Image
    className='foto w-full'
    src="https://i.pinimg.com/originals/69/a6/ee/69a6ee92ba1bf9d51ab6c649768b9705.jpg"
  />
  <div className='p-2'>
  <p className=' text-2xl font-bold my-2'>BILBOARD</p>
          <a href="bilboard">
      <Button type="primary">Bo'limga o'tish</Button>            
          </a>
  </div>
        </div>

     
        
      </div>
    </div>
  )
}

export default Jobs