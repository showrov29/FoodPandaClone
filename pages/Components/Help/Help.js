import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CancelOrder from './CancelOrder';
import ReportIssue1 from './Reportissue1';
const Help = () => {
  const router = useRouter();

  useEffect(() => {
    // Calculate the content height
    const content = document.querySelector('.content');
    if (content) {
      const isContentOverflowing = content.scrollHeight > content.clientHeight;
      if (isContentOverflowing) {
        content.style.overflowY = 'scroll'; // Enable vertical scrolling
      } else {
        content.style.overflowY = 'hidden'; // Disable vertical scrolling
      }
    }
  }, []);
  

  return (
    <>
    <div className='bg-white'>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '75vh' }}>
      <div className='flex justify-between pt-6 px-4'>
        <div className='flex justify-start font-normal text-lg '>
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
          <div>Help center</div>
        </div>
        <div>
          <ReportIssue1/>
        </div>
      </div>
        <div className=''>
          <h1 className='text-xl text-pink-500 font-semibold text-center'>How can we help you?</h1>
          <div className="my-4 flex justify-center">
            <input type="text" placeholder="Search" className="input input-bordered w-80 h-8 md:w-auto" />
          </div>
        </div>
     
       <div>
        <CancelOrder/>
       </div>


      <div className='mt-4 mx-2 relative z-0 mb-20 bg-pink-100 rounded-lg'>
        <div className="collapse collapse-arrow bg-pink-100 "  style={{ margin: "-5px 0" }}> 
         <input type="checkbox" /> 
            <div className="collapse-title text-md font-sm">1) Frequently Asked Questions</div>
               <div className="collapse-content pl-10"> 
                  <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit? </p>
                    <p>2. sed do eiusmod tempor incididunt ut labore et dolore? </p> 
                    <p> 3. Ut enim ad minim veniam, quis nostrud exercitation?</p>    
               </div>
            </div>
            <div className="collapse collapse-arrow bg-pink-100" style={{ margin: "-16px 0" }}> 
         <input type="checkbox" /> 
            <div className="collapse-title text-md font-sm"  >2) Placing Orders</div>
               <div className="collapse-content pl-10"> 
                  <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit? </p>
                    <p>2. sed do eiusmod tempor incididunt ut labore et dolore? </p> 
                    <p> 3. Ut enim ad minim veniam, quis nostrud exercitation?</p>    
               </div>
            </div>
            <div className="collapse collapse-arrow bg-pink-100" style={{ margin: "-16px 0" }}> 
         <input type="checkbox" /> 
            <div className="collapse-title text-md font-sm" >3) Order Tracking</div>
               <div className="collapse-content pl-10"> 
                  <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit? </p>
                    <p>2. sed do eiusmod tempor incididunt ut labore et dolore? </p> 
                    <p> 3. Ut enim ad minim veniam, quis nostrud exercitation?</p>    
               </div>
            </div>
            <div className="collapse collapse-arrow bg-pink-100" style={{ margin: "-16px 0" }}> 
         <input type="checkbox" /> 
            <div className="collapse-title text-md font-sm" >4) Payments and Billing</div>
               <div className="collapse-content pl-10"> 
                  <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit? </p>
                    <p>2. sed do eiusmod tempor incididunt ut labore et dolore? </p> 
                    <p> 3. Ut enim ad minim veniam, quis nostrud exercitation?</p>    
               </div>
            </div>
            <div className="collapse collapse-arrow bg-pink-100" style={{ margin: "-16px 0" }}> 
         <input type="checkbox" /> 
            <div className="collapse-title text-md font-sm">5) Refunds and Cancellations</div>
               <div className="collapse-content pl-10"> 
                  <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit? </p>
                    <p>2. sed do eiusmod tempor incididunt ut labore et dolore? </p> 
                    <p> 3. Ut enim ad minim veniam, quis nostrud exercitation?</p>    
               </div>
            </div>
        </div>
        </div>
        <div className='fixed pb-5 bottom-0 px-4 left-0 right-0 bg-white shadow-top z-5'>
        <a href={'./Trackpage'} className='btn bg-pink-500 w-full text-white'>Go back</a>
        </div>
    </div>
    </>
  );
};

export default Help;
