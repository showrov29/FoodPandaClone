import { useState, useEffect } from 'react';
import Link from 'next/link';
import Recomanded from './Recomanded';

const PopUp = (props) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [hasDisplayedPopup, setHasDisplayedPopup] = useState(false); // New state variable

  useEffect(() => {
    if (props.flag && !hasDisplayedPopup) {
      setHasDisplayedPopup(true);
      setIsMinimized(false);
    }
  }, [props.flag, hasDisplayedPopup]);

  const toggleMaximized = () => {
    setIsMaximized(!isMaximized);
    if (isMinimized && isMaximized) {
      setIsMinimized(false);
    }
  };

  const toggleMinimized = () => {
    setIsMinimized(!isMinimized);
    if (isMaximized && !isMinimized) {
      setIsMaximized(false);
    }
  };
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {};

  const [selectedPrices, setSelectedPrices] = useState([]);
  const selectedPriceTotal = selectedPrices.reduce((total, price) => total + price, 0);

  const addSelectedPrice = (price) => {
    setSelectedPrices((prevSelectedPrices) => [...prevSelectedPrices, price]);
  };

  const removeSelectedPrice = (price) => {
    setSelectedPrices((prevSelectedPrices) =>
      prevSelectedPrices.filter((selectedPrice) => selectedPrice !== price)
    );
  };
  const total = props.price * quantity + selectedPriceTotal;
  const subtotal = props.price * quantity;
  console.log(total);
  const [selectedProducts, setSelectedProducts] = useState([]);
  // console.log('Selected Products:', selectedProducts);


  return (
    <div>
      {props.flag && !isMaximized && !hasDisplayedPopup ? (
        <button onClick={toggleMaximized} className="maximize-button">
          
        </button>
      ) : null}

      {props.flag ? (
        <div className={`popup ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`}>
          <button onClick={toggleMinimized} className="minimize-button">
            {isMinimized ? 'Maximize' : 'Minimize'}
          </button>
          <button onClick={() => setIsMinimized(false)} className="close-button">
            
          </button>
          <div className="popup-content ">

  <div className='bg-white w-full relative'>
    <div>
      <img src={props.src} className="w-full h-36" />
    </div>
    <button className="product-tile__button-overlay absolute-fill-parent" onClick={addToCart} />
    <div className="absolute-fill-parent product-tile__animation-overlay" />
    <div className="box-flex grow respect-flex-parent-width jc-space-between">
      <div className='grid grid-cols-2 shadow-md h-10 w-auto'>
        <div>
          <h3 className="truncate product-tile__title text-lg font-semibold pl-4">
            {props.title}
          </h3>
        </div>
        <div className="box-flex product-tile__price-row ai-center fw-wrap fd-row">
          <p className="cl-neutral-primary f-label-large-font-size fw-label-large-font-weight lh-label-large-line-height text-end pr-4 font-bold price-colour">
            Tk {total}
          </p>
        </div>
      </div>
    </div>
    <section className='h-screen overflow-y-scroll'>
      <Recomanded
        selectedPrices={selectedPrices}
        addSelectedPrice={addSelectedPrice}
        removeSelectedPrice={removeSelectedPrice}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </section>
    <form method="dialog" className="absolute top-2 right-2">
      <button className='rounded-full p-2 bg-pink-600'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
          <path fill="#DA0C81" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
          <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path>
          <path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
        </svg>
      </button>
    </form>
  </div>
  <div className='absolute-fill-parent product-tile__animation-overlay w-full bg-white shadow-top-sm h-24 absolute bottom-0'>
    <div className="box-flex grow respect-flex-parent-width jc-space-between">
      <div className='pt-6'>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              className={`font-bold hover:text-xl pl-8 ${
                quantity > 0 ? 'text-pink-500' : 'text-black'
              }`}
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <div className='font-bold text-lg px-4'>{quantity}</div>
            <button className='font-bold text-xl color-pink text-pink-500 mr-2' onClick={() => setQuantity(quantity + 1)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <button className="rounded-lg w-full mx-4 btn-secondary p-2 text-white font-semibold relative">
            <Link href={`/cart?title=${props.title}&totalPrice=${total}&subtotal=${subtotal}&src=${props.src}&quantity=${quantity}&selectedProducts=${JSON.stringify(selectedProducts)}`}>Add to cart</Link>
          </button>
        </div>
      </div>
    </div>
  </div>

          </div>
          <style jsx>
            {`
              .popup {
                position: fixed;
                z-index:50;
                bottom: 0;
                right: 0;
                background-color: pink;
                width: 100%;
                height: ${isMinimized ? '100%' : '95%'};
                border: 1px solid #ccc;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                transition: height 0.3s;
                overflow: hidden;
              }

              .minimized {
                height: 10%;
              }

              .maximized {
                height: 100%;
              }

              .popup button {
                display: block;
                width: 100%;
              }

              .close-button {
                position: absolute;
                top: 5px;
                right: 5px;
              }

              .popup-content {
                padding: 10px;
              }

              .maximize-button {
                position: absolute;
                top: 0;
                left: 0;
              }
            `}
          </style>
        </div>
      ) : null}
    </div>
  );
};

export default PopUp;
