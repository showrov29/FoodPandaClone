import React from 'react'
import Countdown from './Countdown'

export default function Trackorder() {
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
    </div>
    </>
  )
}
