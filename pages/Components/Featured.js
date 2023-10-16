import React from 'react'
import Image from "next/image";
export default function Featured() {
  

 
  return (
    <div>
    <div>
    <img src='/img/food1.jpeg' className="w-full h-32"/>
    </div>

    <div className="grid grid-cols-1 bg-pink-100 text-pink-600 px-2 py-2">
      <p>Wellcome: 20% off up to 75 tk on orders over 299 tk (valid 2 times).</p>
      </div>
      <div className="bg-white-400 px-4 py-4">
        <h1 className="font-black	 font-weight:400 font-sans md:font-serif ">Burger express mirpur</h1>
        <div className="grid grid-cols-2"> 
        <div className="text-black text-opacity-50 text-xs font-sans md:font-serif">Best foods</div>
        </div>
        <div className="flex">
        <div className="mt-4">
          <Image src="/img/star.png" alt="image" width="30" height="30" />
        </div>
        <div className="flex items-center text-black text-opacity-50 mt-4 ml-4 text-sm">
          20000+ Ratings
        </div>
        <div className="flex items-center ml-auto">
          <a href="#" className=" mt-2 font-medium text-pink-600 dark:text-pink-500 hover:underline text-sm font-sans md:font-serif">Review</a>
        </div>
      </div>
       
      <div className="flex">
        <div className="mt-4 text-pink-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </div>
        <div className="flex items-center text-black text-opacity-100 mt-4 ml-4 text-sm font-sans md:font-serif">
          Cooking time: min 40 mins.
        </div>
      </div>

      </div>
    </div>
  );
}
