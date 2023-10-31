import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
export default function Cartview() {
  const router = useRouter();
  const title = router.query.title;
  const src = router.query.src;
  const quantity = router.query.quantity;
  const subtotal = router.query.subtotal;
  const totalPrice = router.query.totalPrice;
  const selectedProductsString = router.query.selectedProducts;
  // let selectedProducts = [];
  // try {
  //   selectedProducts = selectedProductsString ? JSON.parse(selectedProductsString) : [];
  // } catch (error) {
  //   console.error('Error parsing selectedProductsString:', error);
  // }

  const [selectedProducts, setSelectedProducts] = useState(
    selectedProductsString ? JSON.parse(selectedProductsString) : []
  );

  const handleDeleteItem = (index) => {
    const updatedSelectedProducts = [...selectedProducts];
    const removedItem = updatedSelectedProducts.splice(index, 1)[0]; 
    setSelectedProducts(updatedSelectedProducts);

    const updatedTotalPrice = totalPrice - parseFloat(removedItem.price);
    const updatedTotalPriceStr = updatedTotalPrice.toFixed(0);
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        selectedProducts: JSON.stringify(updatedSelectedProducts),
        totalPrice: updatedTotalPriceStr,
      },
    });
  };
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

      <div className="bg-white-50 w-full h-1/6">
        <div className="w-full h-1/2">
          <div className="card mt-1 bg-white-800 shadow-md mx-4">
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
        {/* <button onClick={() => handleDeleteItem(index)} className="text-red-500 font-semibold pl-2 pt-2">
            Delete
          </button> */}
          <div className="pl-6">
            <Image src={src} alt="img" height={96} width={96} className="rounded-md" />
          </div>
          
          <div className="text-left font-semibold flex-grow pl-4">{title} ({quantity}x)</div>
          <div className="text-right pr-6 price-colour">Tk {subtotal}</div>
          
        </div>

        <div className="scrollable-section overflow-y-scroll max-h-[calc(100vh-200px)]">
          <ul className="w-full">
            {selectedProducts.map((item, index) => (
              <li key={index} className="flex items-center py-2">
                <button
                  onClick={() => handleDeleteItem(index)}
                  className="text-pink-500 font-semibold pl-8 pt-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#DA0C81" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>

                </button>
                <div className="text-left flex-grow font-semibold pl-2 pt-3">{item.name}</div>
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
              selectedProducts)}`}
          >
            Confirm Menu
          </a>
        </button>
      </div>
    </div>
  );
}
