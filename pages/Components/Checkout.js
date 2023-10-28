import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Checkout() {
  const router = useRouter();
  const title = router.query.title;
  const quantity = router.query.quantity;
  const subtotal = router.query.subtotal;
  const totalPrice = router.query.totalPrice;
  const selectedProductsString = router.query.selectedProducts;
  let selectedProducts = [];
  try {
    selectedProducts = selectedProductsString ? JSON.parse(selectedProductsString) : [];
  } catch (error) {
    console.error('Error parsing selectedProductsString:', error);
  }

  const [selectedOption1, setSelectedOption1] = useState('dine-in');
  const [selectedOption2, setSelectedOption2] = useState('cash');
  const handleOptionChange1 = (option) => {
    setSelectedOption1(option);
  };
  const handleOptionChange2 = (option) => {
    setSelectedOption2(option);
  };
console.log(totalPrice);
  return (
    <>
      <div className="bg-white-800">
        <div className='mt-8'>
          <div className='relative pb-2 z-20'>
            <ul className="steps w-full bg-white-500">
              <li className="step step-secondary text-xs">Menu</li>
              <li className="step step-secondary text-xs">Cart</li>
              <li className="step step-secondary text-xs">Checkout</li>
            </ul>
          </div>
          <div className='mb-44'>
          <div className="w-full h-2 relative bottom-12 z-10">
          <div className="h-full bg-gradient-to-r bg-pink-500"></div>
          </div>
          <div className="bg-slate-50 w-11/12 h-1/6 ml-4">
            <div className="w-full h-1/2">
              <div className="card mt-1 bg-white-800 shadow-sm">
                <div className="card-body">
                  <h1>Order Type</h1>
                  <div id='cb1' className='flex justify-between py-4 text-lg font-bold'>
                    <input
                      type="radio"
                      id="dine-in"
                      name="orderType"
                      value="dine-in"
                      className="w-8 h-8"
                      checked={selectedOption1 === 'dine-in'}
                      onChange={() => handleOptionChange1('dine-in')}
                    />
                    <label htmlFor="dine-in" className="pl-2">Dine in</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                      <path fill="none" stroke="#EC53B0" stroke-width="2" d="M4 28h24V8H4z"/>
                      <path fill="none" stroke="#EC53B0" stroke-width="2" d="M16 28V8"/>
                      <circle cx="8" cy="20" r="4" fill="none" stroke="#EC53B0" stroke-width="2"/>
                      <circle cx="24" cy="20" r="4" fill="none" stroke="#EC53B0" stroke-width="2"/>
                    </svg>
                  </div>
                  <div id='cb1' className='flex justify-between py-4 text-lg font-bold'>
                    <input
                      type="radio"
                      id="takeaway"
                      name="orderType"
                      value="takeaway"
                      className="w-8 h-8"
                      checked={selectedOption1 === 'takeaway'}
                      onChange={() => handleOptionChange1('takeaway')}
                    />
                    <label htmlFor="takeaway" className="pl-2">Takeaway</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12">
                      <path fill="none" stroke="#EC53B0" stroke-width="2" d="M0 10l5-5 5 5M24 10l-5-5-5 5"/>
                      <path fill="none" stroke="#EC53B0" stroke-width="2" d="M9 8h6M9 4h6M3 8h2M19 8h2"/>
                      <circle fill="#EC53B0" cx="5" cy="10" r="2"/>
                      <circle fill="#EC53B0" cx="19" cy="10" r="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 w-11/12 h-1/6 ml-4 mt-4 ">
            <div className="w-full h-1/2">
              <div className="card mt-1 bg-white-800 shadow-sm">
                <div className="card-body">
                <h1 className='text-center font-semibold'>Payment Option</h1>
                  <div id='cb1' className='flex justify-between py-4 text-lg font-bold'>
                    <input
                      type="radio"
                      id="cash"
                      name="paymentOption"
                      value="cash"
                      className="w-8 h-8"
                      checked={selectedOption2 === 'cash'}
                      onChange={() => handleOptionChange2('cash')}
                    />
                    <label htmlFor="cash" className="pl-2">Cash</label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EC53B0" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <div id='cb1' className='flex justify-between py-4 text-lg font-bold'>
                    <input
                      type="radio"
                      id="online-payment"
                      name="paymentOption"
                      value="online-payment"
                      className="w-8 h-8"
                      checked={selectedOption2 === 'online-payment'}
                      onChange={() => handleOptionChange2('online-payment')}
                    />
                    <label htmlFor="online-payment" className="pl-2">Pay online</label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EC53B0" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className='fixed pb-5 bottom-0 left-0 right-0 bg-white shadow-top z-5'>
        <div className='px-6 text-sm font-thin mb-2'>
          <div className='grid grid-cols-2 text-lg font-semibold'>
            <h1>Total</h1>
            <h1 className='flex justify-end price-colour mr-2'>Tk {totalPrice}</h1>
          </div>
        </div>
        <button className='w-full px-6'>
        <a className='btn w-full bg-pink-500 text-white' href={`./Trackpage?totalPrice=${totalPrice}&title=${title}&subtotal=${subtotal}&quantity=${quantity}&selectedOption1=${selectedOption1}&selectedOption2=${selectedOption2}&selectedProducts=${JSON.stringify(selectedProducts)}`}>Place order</a>
        </button>
      </div>
    </>
  )
}
