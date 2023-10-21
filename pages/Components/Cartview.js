import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
export default function Cartview() {
  const router = useRouter();
  const title = router.query.title;

  const totalPrice = router.query.totalPrice;
  // console.log(title)
  return (
    <>
    <div className='pl-12 relative top-8 z-4 flex flex-row-2'>
    <div className='pt-3 text-pink-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    </div>
   <h1 className='text-xl font-light flex text-black pt-2 pl-2'>Cart</h1>
    </div>
  
  <div className="bg-white-800 ">
    <div className='mt-12'>
    <div className='relative pb-2 z-20'>
      <ul className="steps w-full bg-white-500">
        <li className="step step-secondary text-xs ">Menu</li>
        <li className="step step-secondary text-xs">Cart</li>
        <li className="step text-xs">Checkout</li>
      </ul>
    </div>
    <div className="w-full h-2 relative bottom-12 z-10">
  <div className="h-full bg-gradient-to-r from-pink-500 to-slate-200"></div>
</div>
</div>

   
    <div className="bg-slate-50 w-11/12	h-1/6	ml-4">
    <div className="w-full h-1/2 ">
    <div className="card mt-4 bg-white-800 shadow-md">
    <div className="card-body">
      <div className="grid grid-cols-2">
    <h2 className="text-lg font-semibold">Cooking time</h2>
    <p>ASAP (40 mins)</p>
    <button className="text-pink-400 text-start">Change</button>
    </div>
  </div>
  </div>
  </div>
  </div>
      <div className="grid grid-cols-3 items-center mt-6">
        <div>
        <Image src='/img/featured1.png' alt='img' height={100} width={100}/>
        </div>
        <h3 className='text-center'>{title}</h3>
        <p className='text-right mr-4'>Tk {totalPrice}</p>
      </div>
      {/* <div className='px-6 relative top-48 text-sm font-thin'>
        <div className='grid grid-cols-2'>
          <p>Subtotal</p>
          <p className='flex justify-end'>Tk {totalPrice}</p>
        </div>
      </div> */}
      <div className='px-6 relative top-36 text-sm font-thin'>
        {/* <div className='grid grid-cols-2'>
          <p>Delivary fee</p>
          <p className='flex justify-end'>Tk 40</p>
        </div> */}
        <div className='grid grid-cols-2 text-lg font-semibold'>
        <h1>Total</h1>
        <h1 className='flex justify-end'>Tk {totalPrice}</h1>
      </div>
      </div>
      <div className='relative top-40 z-5 px-2 bg-slate-50 rounded-3xl' > 
           <a className='btn w-full bg-pink-500 text-white' href='./Cheakout'>Review Payment and address</a>
      </div>
</div>
    </>
  )
}
