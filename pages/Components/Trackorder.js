import React from 'react'
import Countdown from './Countdown'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Trackorder() {
  const router = useRouter();
  const title = router.query.title;
  const quantity = router.query.quantity;
  const subtotal = router.query.subtotal;
  const totalPrice = router.query.totalPrice;
  const selectedProductsString = router.query.selectedProducts;
  let selectedProducts = [];
  try {
    selectedProducts = selectedProductsString ? JSON.parse(selectedProductsString) : [];
  } catch (error) {
    console.error('Error parsing selectedProductsString:', error);
  }
  useEffect(() => {
    const scrollContainer = document.querySelector('.h-screen.overflow-y-scroll');

    if (scrollContainer) {
      scrollContainer.style.overflow = 'hidden';
    }
  }, []);
// console.log(selectedProducts);
  return (
    <>
    <div className='flex justify-between mt-8 px-8'>
        <div>
            <button className='text-pink-500 font-bold'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
        <div className='text-xl font-extrabold'>Your order</div>
        <div>
            <button className='text-pink-500'>Help</button>
        </div>
    </div>

    <div className='mt-8' >
      <div className='flex justify-center text-base'>Estimated cooking time</div>
      <div className='flex justify-center font-extrabold text-2xl'>
        <Countdown/>
      </div>
      <div className='flex justify-center mt-4'>
        <img src='/img/cook.png' height={200} width={200} alt='Cooking icon'/>
      </div>
        <div className='flex justify-center mt-4 text-pink-500'>
          <progress className="progress progress-secondary w-56"></progress>
        </div>
        <div className='flex justify-center mt-4 '>
          <button className='text-pink-500 font-semibold'>Watch Cooking</button>
        </div>
    </div>
    <section className='bg-white p-4 h-screen section-container'>
      <div className='bg-pink-50 p-4 rounded-lg shadow-lg'>
      <div className='flex justify-start text-xl font-extrabold '>
        <div >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF69B4" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
        </div>
        <h1 className='pl-2'>Order summary</h1>
      </div>
           <h1 className='font-extrabold text-base pt-8'>Restaurant name</h1>
        <div className='flex justify-between pt-2'>
          <h1 className=' font-medium'>Order number</h1>
          <h1 className=' font-medium text-sm'>#COVVCQ2G</h1>
        </div>
            <div className="divider"></div>
        <div className='flex justify-between'>
          <h1 className="text-left flex-grow font-semibold">({quantity}x) {title}</h1>
          <p className='text-right pr-6 price-colour font-semibold'>Tk {subtotal}</p>
          
        </div> 
            <div className="flex justify-between pt-4 font-extralight text-md">
              <ul className="w-full">
                {selectedProducts.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="text-left flex-grow font-light">{item.name}</div>
                    <div className="text-right pr-6 price-colour">Tk {item.price}</div>
                </li>
                ))}
              </ul>
          </div>
      </div>  
    </section>
    {/* <button className='w-full px-6 mt-2'>
          <a className='btn w-full bg-pink-500 text-white'  href='/'>Order more</a>
        </button> */}
      <div className='fixed pb-5 bottom-0 left-0 right-0 bg-white shadow-top z-5'>
            <div className='px-6 text-sm font-thin mb-2'>
                <div className='grid grid-cols-2 text-lg font-semibold'>
                <h1>Total</h1>
                <h1 className='flex justify-end price-colour'>Tk {totalPrice}</h1>
              </div>
          </div>
            <button className='w-full pl-6 pr-6'>
                <a className='btn w-full bg-pink-500 text-white'  href='/'>Confirm Menu</a>
            </button>
        </div>
    </>
  )
}
