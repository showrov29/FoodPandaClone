import React from 'react';
import { useRouter } from 'next/router';
const VideoPlayer = () => {
    const router = useRouter();
    const handleButtonClick = () =>{
        router.push('./Trackpage')
    }
  return (
    <>
    <div className='flex justify-start pl-4 mt-2 py-4'>
    <button onClick={handleButtonClick} className='pl-4 text-pink-500'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="#EC53B0" width="28" height="28" viewBox="0 0 32 32">
  <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left"/>
</svg>
    </button> 
        <button onClick={handleButtonClick}  className='pl-2 font-semibold text-xl'>Go back</button>
    </div>
    <div className='flex justify-center m-4'>
      <video controls>
        <source src="/sample.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      </div>
      <h1 className='text-lg font-semibold text-center'>Camera 1</h1>
    </>
  );
};

export default VideoPlayer;
