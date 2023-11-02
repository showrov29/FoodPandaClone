import React from 'react';
import Image from 'next/image';

export default function Featured() {
  return (
    <div className="w-full md:w-1/2 lg:w-3/5 mx-auto ">
      <div className="bg-white-400 rounded-md shadow-md ">
        {/* <div className=" flex relative ">
        <Image src="/img/food1.jpeg" alt="Food" layout="responsive" width={400} height={200} />
        </div> */}
        <img src="/img/food1.jpeg" alt="Food" layout="responsive"  className='w-full h-64'/>

        <div className="p-4 featured-text">
          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2">Burger Express Mirpur</h1>
          <p className="text-sm md:text-base text-gray-500">Best foods</p>

          <div className="flex items-center mt-2">
            <div className="flex items-center">
              <Image src="/img/star.png" alt="Star" width={20} height={20} />
              <span className="text-black text-opacity-50 ml-2 text-xs md:text-sm">20000+ Ratings</span>
            </div>
            <a href="/Components/Review" className="ml-auto font-medium text-pink-600 dark-text-pink-500 hover:underline text-xs md:text-sm">
              Review
            </a>
          </div>

          <div className="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-pink-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-black text-opacity-100 ml-2 text-xs md:text-sm">Cooking time: min 40 mins.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
