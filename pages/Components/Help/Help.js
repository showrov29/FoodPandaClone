import React from 'react';
import { Router } from 'react-router-dom';
import { useRouter } from 'next/router';
import CancelOrder from './CancelOrder';
const Help = () => {
    const router = useRouter();
  const handleIssueSubmit = (e) => {
    e.preventDefault();
    const issueText = document.getElementById("issue-text").value;
    console.log("Reported issue:", issueText);
    document.getElementById("issue-text").value = "";
  };

  

  return (
    <>
    <div className='bg-white h-screen'>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '85vh' }}>
      <div className='flex justify-between pt-12 px-4'>
        <div className='flex justify-start font-normal text-lg '>
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="black" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
          <div>Help center</div>
        </div>
        <section className='relative z-10'>
        <div className="drawer drawer-bottom">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end pr-4 pb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.430.326-.670.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
          <label htmlFor="my-drawer" className="drawer-button text-black font-sm ">Report issue</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-8 pt-12 w-auto h-1/2 bg-base-200 text-base-content ">
            <form id="issue-form" onSubmit={handleIssueSubmit}>
              <textarea placeholder="Write here" className="textarea textarea-bordered textarea-md w-full max-w-xs" id="issue-text"></textarea>
              <button type="submit" className="btn btn-secondary mt-4 ml-24">Submit</button>
            </form>
            <a href={'./Trackpage'} className=' btn absolute top-0 right-2'>Close</a>
          </ul>
        </div>
      </div>
      </section>
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


      <div className='mt-4 mx-2 relative z-0'>
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
        <div className=' pl-6 pr-6'>
        <a href={'./Trackpage'} className='btn btn-secondary w-full text-white'>Go back</a>
        </div>
    </div>
    </>
  );
};

export default Help;
