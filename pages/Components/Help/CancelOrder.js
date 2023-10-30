import React from 'react';
import { useState } from 'react';
const CancelOrder = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div>
     <div className='flex pl-4 py-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF3FA4" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v-1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
        {/* <button className="text-pink-500 font-semibold" onClick={handleCancelOrder}>
          
        </button> */}
        <button className="pl-1 text-pink-500 font-semibold text-lg" onClick={() => {
                setFlag(true);
                document && document.getElementById('my_modal_2')?.showModal();
              }}>Cancel order</button>
             <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Dear Customer</h3>
              <p className="pt-4 text-lg font-semibold">Your order was canceled</p>
              <p className="">Order-number: #COVVCQ2G</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button></button>
            </form>
          </dialog>
      </div>
    </div>
  );
};

export default CancelOrder;
