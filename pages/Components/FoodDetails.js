import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import Modal from './Modal'
export default function FoodDetails (props) {
  const [flag,setFlag]=useState(false)

  return (
    <> 
<div className="p-2">
<h1 className='p-2 text-bold text-xl'>{props.category}</h1>
<div className='rounded-lg border-2 flex flex-row justify-between h-32 w-auto items-center px-4  hover:scale-105 transition-all duration-100  hover:bg-pink-100 relative z-10' >
<div className='flex flex-col'>
    <h3 className='text-xs font-bold overflow-hidden '>{props.title}</h3>
    <p className='truncate text-xs max-w-xs pr-2'>{props.description}</p>
    <h4 className='text-xs font-semibold'>{props.price} tk</h4>
</div>
<div>
    <Image src={props.src} className='rounded-lg'  height={200} width={200}/>
  <button className='absolute bottom-7 right-6 bg-white rounded-full' onClick={()=>{setFlag(true);  document && document.getElementById('my_modal_5')?.showModal()}}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
  </button>
  </div>
</div>
</div>
<div>
{ flag && <Modal src={props.src} title={props.title} description={props.description} price={props.price}/>}
</div>
    </>
  )
}

