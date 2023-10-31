import React from 'react';

const ReportIssue = () => {
  const handleIssueSubmit = (e) => {
    e.preventDefault();
    const issueText = document.getElementById("issue-text").value;
    console.log("Reported issue:", issueText);
    document.getElementById("issue-text").value = "";
  };

  return (
    <div>
      <section className='relative z-10'>
        <div className="drawer drawer-bottom">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex justify-end pr-4 pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.430.326-.670.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            <label htmlFor="my-drawer" className="drawer-button text-black font-sm">Report issue</label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-8 pt-12 w-auto h-1/2 bg-white text-base-content relative">
              <div className='flex justify-start pb-8'>
                <div>
                  <a href='./HelpPage' className='text-pink-500 font-bold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </a>
                </div>
                <div className='text-xl font-extrabold pl-2'>Write issue here</div>
              </div>

              <form id="issue-form" onSubmit={handleIssueSubmit}>
                <div className="flex flex-col h-full">
                  <textarea placeholder="Write here" className="textarea textarea-bordered textarea-lg h-96 w-full flex-grow" id="issue-text"></textarea>
                  <div className="flex justify-center items-end h-full">
                    <button type="submit" className="btn btn-secondary w-1/2 absolute bottom-8">Submit</button>
                  </div>
                </div>
              </form>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportIssue;
