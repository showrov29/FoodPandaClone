import React from 'react'
import Checkout from './Components/Checkout'
import { useRouter } from 'next/router';

export default function Checkoutpage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  }
  return (
    <div>
      <div className='pl-8 relative top-4 z-4 flex flex-row-2'>
    <button onClick={handleClick} className='pt-1 text-pink-500'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="#EC53B0" width="32" height="32" viewBox="0 0 32 32">
  <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left"/>
</svg>
    </button>
   <h1 className='text-2xl font-semibold flex text-black pt-2 pl-2'>Checkout</h1>
    </div>
    <Checkout/>
    </div>
  )
}
