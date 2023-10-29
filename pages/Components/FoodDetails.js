import React, { useState } from 'react';
import Modal from './Modal1';
import PopUp from './PopUp';

export default function FoodDetails(props) {
  const [flag, setFlag] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <div>
      {props.category && (
        <h2 className="pl-4 text-xl font-bold pt-8 shadow-top-lg">{props.category}</h2>
      )}
      <div className="bg-white p-4 rounded-lg flex relative">
        <div className="w-3/4 pr-4 ">
          <h2 className="text-md font-semibold">{props.title}</h2>
          <p className="text-black text-opacity text-sm font-thin">{props.description}</p>
          <p className="text-gray-600 pt-2 price-colour">Tk {props.price}</p>
        </div>
        <div className="w-1/4 relative">
          <div className="relative">
            <img
              src={props.src}
              alt={props.title}
              className="w-28 h-20 rounded-lg"
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
                className="w-8 h-8 text-white rounded-2xl"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </div>
        {flag && (
          // <PopUp src={props.src} title={props.title} description={props.description} price={props.price} flag={flag}  selectedProducts={selectedProducts}/>
          <Modal src={props.src} title={props.title} description={props.description} price={props.price}  selectedProducts={selectedProducts} />
        )}
      </div>
      <hr className="my-2 w-full border-t border-gray-300" />
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