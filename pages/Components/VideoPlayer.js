import React from 'react';
import { useRouter } from 'next/router';
const VideoPlayer = () => {
    const router = useRouter();
    const handleButtonClick = () =>{
        router.push('./Trackpage')
    }
  return (
    <>
    <div className='flex justify-start pl-4 mt-4 py-4'>
        <button onClick={handleButtonClick} className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="#FF3FA4"  class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"/>
            </svg>
         </button>
        <div className='pl-2 font-semibold text-xl'>Go back</div>
    </div>
    <div className='flex justify-center m-4'>
      <video controls>
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <h1 className='text-lg font-semibold text-center'>Camera 1</h1>
    </>
  );
};

export default VideoPlayer;
