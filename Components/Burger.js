import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import ProductMenuItem from './ProductMenuItem'
import Modal from './Modal'
export default function Burger(props) {
  const [flag,setFlag]=useState(false)

  return (
    <> 
    <div className="p-2">
<div className='bg-white rounded-lg border-2 flex flex-row justify-between h-32 w-72 items-center px-4  hover:scale-105 transition-all duration-100 hover:bg-pink-100 relative ' >
<div className='flex flex-col'>
    <h3 className='text-lg font-bold overflow-hidden '>{props.title}</h3>
    <p className='truncate max-w-xs'>{props.description}</p>
    <h4 className='text-md font-semibold'>{props.price} tk</h4>
</div>
<div>
    <Image src='/img/featured.jpeg' className='rounded-lg'  height={200} width={200}/>
  <button className='absolute bottom-7 right-6 bg-white rounded-full' onClick={()=>{setFlag(true); console.log('aklsdf hkajsdh');}}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
  </button>
  </div>
</div>
</div>
<div>
{ flag && <Modal flag={flag} />}
  
</div>
    </>
  )
}
