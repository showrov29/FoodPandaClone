import React from 'react';
import Cartview from './Components/Cartview';
import { useRouter } from 'next/router';

const cart = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  }
  return (
    <>
    <div className='fixed'>
      <div className='pl-8 relative top-4 z-4 flex flex-row-2'>
    <button onClick={handleClick} className='pt-3 text-pink-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    </button>
   <h1 className='text-xl font-light flex text-black pt-2 pl-2'>Cart</h1>
    </div>
      <Cartview/>
    </div>
    </>
  );
};

export default cart;
