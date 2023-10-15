import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import Addressreview from './Addressreview'
export default function Cartview(props) {
  console.log(props)
  return (
    <>
    <div className="bg-white-800">
    <div>
        <ul className="steps w-full h-full bg-pink-500">
        <li className="step step-success">Menu</li>
        <li className="step step-success">Cart</li>
        <li className="step">Cheakout</li>
</ul>
</div>
    <div className="bg-slate-50 w-11/12	h-1/6	ml-4">
    <div className="w-full h-1/2 ">
    <div className="card mt-4 bg-white-800 shadow-md">
    <div className="card-body">
      <div className="grid grid-cols-2">
    <h2 className="card-title">Cooking time</h2>
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
        <h3 className='text-center'>Chicken {props.title}</h3>
        <p className='text-right mr-4'>price</p>
      </div>
      <div className='px-6 relative top-48 text-sm font-thin'>
        <div className='grid grid-cols-2'>
          <p>Subtotal</p>
          <p className='flex justify-end'>Tk 122{props.price}</p>
        </div>
      </div>
      <div className='px-6 relative top-48 text-sm font-thin'>
        <div className='grid grid-cols-2'>
          <p>Delivary fee</p>
          <p className='flex justify-end'>Tk 40</p>
        </div>
        <div className='grid grid-cols-2 text-lg font-semibold'>
        <h1>Total</h1>
        <h1 className='flex justify-end'>Tk {props.price}</h1>
      </div>
      </div>
      <div className='relative top-64 px-2 bg-slate-50 rounded-3xl' > 
           <a className='btn w-full bg-pink-500' href='./Cheakout'>Review Payment and address</a>
      </div>
</div>
    </>
  )
}
