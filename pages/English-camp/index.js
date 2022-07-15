import { Button } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
function Index(props) {
  const [currentImage,SetCurrentImage] = useState("h5")
  useEffect(()=>{
    const images = ["h2","h3","h4","h5","h8","h9","h12","h13"]
    const intervalId = setInterval(() => {
      SetCurrentImage(images[Math.floor(Math.random() * images.length)]);
  }, 5000)
  return ()=> clearInterval(intervalId)
  },[])

  return (
    <div className="relative overflow-hidden">
    <div className={`w-full h-screen bg-[url("/heroImage/h3.jpg")] pictureZooom2 ease-out duration-300 addBulr bg-no-repeat bg-cover bg-center flex justify-around items-center`}></div>
        <ul className='flex gap-20 list-none englishLevel flex-wrap absolute top-[50%]' xyz="stagger-2 narrow-100% ">
          <Button className='w-max h-max text-white square xyz-in '>
            <Link href="/English-camp/highschool">
              <li className='bg-[#2C7CD1] text-xl  LessSugar hover:bg-slate-300 ease-out duration-300  w-max h-max px-14 py-14 rounded-md shadow-md'>
                <span >High school</span>
               
              </li>
            </Link>
          </Button>
          <Button className='w-max h-max text-white  square xyz-in '>
              <Link href="/English-camp/middleschool">
              <li className='bg-[#97CC04] text-xl LessSugar hover:bg-slate-300 ease-out duration-300  w-max h-max px-14 py-14 rounded-md shadow-md'>
                <span>Middle school</span>
               
              </li>
              </Link>
          </Button>
          <Button className='w-max h-max text-white  square xyz-in '>
              <Link href="/English-camp/elementaryschool">
              <li className='bg-[#F55E00] text-xl  LessSugar hover:bg-slate-300 ease-out duration-300  w-max h-max px-14 py-14 rounded-md shadow-md'>
                <span>Elementary school</span>
               
              </li>
              </Link>
          </Button>
          <Button className='w-max h-max text-white  square xyz-in '>
              <Link href="/English-camp/preschool">
              <li className='bg-[#EDBA02] text-xl LessSugar  hover:bg-slate-300 ease-out duration-300  w-max h-max px-14 py-14 rounded-md shadow-md'>
                <span>Preschool</span>
               
              </li>
              </Link>
          </Button>
      </ul>
    </div>
  )
}

export default Index


