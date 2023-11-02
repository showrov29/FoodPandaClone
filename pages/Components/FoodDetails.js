import React, { useState } from 'react';
import Modal from './Modal1';
import PopUp from './PopUp';
import Image from 'next/image';

export default function FoodDetails(props) {
  const [flag, setFlag] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleDelete = () => {
    console.log('Item deleted:', props.title);
  };
 
  return (
    <div className="w-full md:w-1/2 lg:w-3/5 mx-auto"> {/* Set full width for tablets (lg:w-full) */}
      {props.category && (
        <h2 className="text-xl font-bold pt-4 pl-4 md:pt-8 shadow-top-sm">{props.category}</h2>
      )}
      <div className="bg-white p-4 rounded-lg flex relative product-card">
        <div className="w-full pr-4">
          <h2 className="text-lg font-semibold pb-2">{props.title}</h2>
          <p className="text-sm font-thin text-gray-700">{props.description}</p>
          <p className="text-gray-600 pt-2 price-colour">Tk {props.price}</p>
        </div>
        <div className="product-image">
          <div className="relative">
            <Image
              src={props.src}
              alt={props.title}
              layout="responsive"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <button
              className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-pink-500 rounded-full z-10"
              onClick={() => {
                setFlag(true);
                document && document.getElementById('my_modal_5')?.showModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white rounded-full"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </div>
        {flag && <Modal src={props.src} title={props.title} description={props.description} price={props.price} selectedProducts={selectedProducts} />}
      </div>
    </div>
  );
}




{/* <div className="dropdown dropdown-end absolute bottom-0 right-0 ">
              <div tabIndex={0} className="transform translate-x-1/4 translate-y-1/4 bg-pink-500 rounded-full z-10">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-white rounded-2xl">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                <ProductMenuItem/>
              </ul>
            </div> */}