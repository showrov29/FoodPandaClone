import React from 'react'
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from 'react';
import Foods from './ProductSection';
export default function Featured() {
  

 
  return (
    <div>
    <div>
    <img src='/img/featured1.png' className='w-auto h-auto'/>
    </div>

    <div className="grid grid-cols-1 bg-pink-100 text-pink-600 px-4 py-4">
      <p>Wellcome: 20% off up to 75 tk on orders over 299 tk (valid 2 times).</p>
      </div>
      <div className="bg-white-400 px-4 py-4">
        <h1 className="font-black	 font-weight: 900 ">Burger express mirpur</h1>
        <div className="grid grid-cols-2"> 
        <div className="text-black text-opacity-50 text-xs">Top restaurant | 40 tk delivary charge | 2km away</div>
        <div className="">
              <a href="#" className="flex justify-end font-medium text-pink-600 dark:text-pink-500 hover:underline mr-4 text-sm">More info</a>
              </div>
        </div>
        <div className="flex">
        <div className="mt-4">
          <Image src="/img/star.png" alt="image" width="30" height="30" />
        </div>
        <div className="flex items-center text-black text-opacity-50 mt-4 ml-4 text-sm">
          20000+ Ratings
        </div>
        <div className="flex items-center ml-auto">
          <a href="#" className="font-medium text-pink-600 dark:text-pink-500 hover:underline text-sm">See reviews</a>
        </div>
      </div>
       
      <div className="flex">
        <div className="mt-4">
          <Image src="/img/clock.jpeg" alt="image" width="30" height="30" />
        </div>
        <div className="flex items-center text-black text-opacity-100 mt-4 ml-4 text-sm">
          Delivary:min 40 mins.
        </div>
        <div className="flex items-center ml-auto">
          <a href="#" className="text-black text-opacity-50 mr-4 text-sm">Change</a>
        </div>
      </div>

      </div>
    </div>
  );
}
