import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Cartview() {
  const router = useRouter();
  const title = router.query.title;
  const src = router.query.src;
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

  return (
    <div className="bg-white-800">
      <div className="mt-8">
        <div className="relative pb-2 z-20">
          <ul className="steps w-full bg-white-500">
            <li className="step step-secondary text-xs ">Menu</li>
            <li className="step step-secondary text-xs">Cart</li>
            <li className="step text-xs">Checkout</li>
          </ul>
        </div>
        <div className="w-full h-2 relative bottom-12 z-10">
          <div className="h-full bg-gradient-to-r from-pink-500 to-slate-200"></div>
        </div>
      </div>

      <div className="bg-slate-50 w-11/12 h-1/6 ml-4">
        <div className="w-full h-1/2">
          <div className="card mt-1 bg-white-800 shadow-xl">
            <div className="card-body">
              <div class="flex flex-row">
                <div>
                  <img src="/img/Cooking.png" height="72" width="72" alt="cook" />
                </div>
                <div>
                  <h2 class="text-lg font-semibold mt-6">Cooking time</h2>
                </div>
                <p className="mt-6 text-right">ASAP (40 mins)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='mb-32'>
      <div className="flex items-center mt-6">
        <div className="pl-6">
          <Image src={src} alt="img" height={96} width={96} className="rounded-md" />
        </div>
        <div className="text-left font-semibold flex-grow pl-4">{title} ({quantity}x)</div>
        <div className="text-right pr-6 price-colour">Tk {subtotal}</div>
      </div>

      {/* Scrollable content for selectedProducts */}
      <div className="scrollable-section overflow-y-scroll max-h-[calc(100vh-200px)]">
        <ul className="w-full">
          {selectedProducts.map((item, index) => (
            <li key={index} className="flex items-center">
              <div className="text-left flex-grow font-semibold pl-6 pt-4">{item.name}</div>
              <div className="text-right pr-6 price-colour pt-2">Tk {item.price}</div>
            </li>
          ))}
        </ul>
      </div>

      </section>

      <div className="fixed pb-5 bottom-0 left-0 right-0 bg-white shadow-top z-5">
        <div className="px-6 text-sm font-thin mb-2">
          <div className="grid grid-cols-2 text-lg font-semibold">
            <h1>Total</h1>
            <h1 className="flex justify-end price-colour">Tk {totalPrice}</h1>
          </div>
        </div>
        <button className="w-full pl-6 pr-6">
          <a
            className="btn w-full bg-pink-500 text-white"
            href={`./Checkoutpage?totalPrice=${totalPrice}&title=${title}&subtotal=${subtotal}&quantity=${quantity}&selectedProducts=${JSON.stringify(
              selectedProducts
            )}`}
          >
            Confirm Menu
          </a>
        </button>
      </div>
    </div>
  );
}
