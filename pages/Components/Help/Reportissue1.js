import React from 'react'

export default function Reportissue1() {

    const handleIssueSubmit = (e) => {
        e.preventDefault();
        const issueText = document.getElementById("issue-text").value;
        console.log("Reported issue:", issueText);
        document.getElementById("issue-text").value = "";
      };

  return (
    <div>{/* You can open the modal using document.getElementById('ID').showModal() method */}
    <button className="" onClick={()=>document.getElementById('my_modal_4').showModal()}>
        <div className="flex justify-end pr-4 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.430.326-.670.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            <label htmlFor="my-drawer" className="drawer-button text-black font-sm">Report issue</label>
          </div>
          </button>
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
      <div className='flex justify-start pb-8'>
                <div>
                  <a href='./HelpPage' className='text-pink-500 font-bold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </a>
                </div>
                <a href='./HelpPage' className='text-xl font-extrabold pl-2'>Write issue here</a>
              </div>

      <form id="issue-form" onSubmit={handleIssueSubmit}>
        <div className="flex flex-col h-full">
            <textarea placeholder="Write here" className="textarea textarea-bordered textarea-lg w-full flex-grow" id="issue-text"></textarea>
            <div className="flex justify-center items-end h-full pt-8 modal-action">
            <button type="submit" className="btn btn-secondary w-1/2 relative bottom-0 white">Submit</button>
            </div>
        </div>
        </form>
        <div className="modal-action">
          <form method="dialog"> 
            <button className="btn border-none absolute top-0 right-0 text-red-500 bg-white rounded-full font-extralight text-2xl">x</button>
          </form>
        </div>
      </div>
    </dialog></div>
  )
}
