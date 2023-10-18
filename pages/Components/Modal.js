import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import Recomanded from './Recomanded';
import Cartview from './Cartview';
export default function Modal(props) {
const [flag,setFlag]=useState(false)
useEffect(() => {
    setFlag(props.flag)

    if (flag){
       document.getElementById('my_modal_5').showModal()
    }
    else {

    }
   },[])
   
   const [quantity, setQuantity] = useState(1);

   const addToCart = () => {
     
   };
   
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
  return (
  <>
    {flag && <div className="fixed inset-0 bg-black opacity-90 z-10"></div>}

  <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
     <div className='bg-white w-full h-5/6'> 
     <div className=''>
     <img src={props.src} className="w-full h-36 "/>
      </div>
          <button
        className="product-tile__button-overlay absolute-fill-parent"
        onClick={addToCart}
      />
      <div className="absolute-fill-parent product-tile__animation-overlay" />
      <div className="box-flex grow respect-flex-parent-width jc-space-between">
        <div className='grid grid-cols-2 shadow-md h-10 w-auto'>
        <div>
          <h3 className="truncate product-tile__title text-lg font-semibold pl-4">
            {props.title}
          </h3>
        </div>
        <div className="box-flex product-tile__price-row ai-center fw-wrap fd-row">
          <p className="cl-neutral-primary f-label-large-font-size fw-label-large-font-weight lh-label-large-line-height text-end pr-4 font-bold">Tk {' '}
          {props.price * quantity + selectedPriceTotal}
          </p>
        </div>
        </div>
      </div>
      <div className='h-64 overflow-y-scroll'>
        <Recomanded 
        selectedPrices={selectedPrices}
        addSelectedPrice={addSelectedPrice}
        removeSelectedPrice={removeSelectedPrice}/>
        
        </div>
      
      <div className='  mt-2 shadow-top-lg'>
       <div className="box-flex product-tile__quick-add-to-cart flex flex-col-4 pb-2">
        <button
          className={`font-bold hover:text-xl pl-8 mt-6 ${
            quantity > 0 ? 'text-pink-500' : 'text-black'
            }`}
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

        </button>
          <div className='font-thin text-lg px-4 mt-6'>{quantity}</div>
          <button className='font-bold mt-6 text-xl color-pink pr-12 text-pink-500'
            onClick={() => setQuantity(quantity + 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </button>
        
        </div>
        <div className="flex justify-center">
      <button className="rounded-lg w-56 btn-secondary hover:scale-105 transition-all font-sans md:font-serif absolute bottom-0 right-4 p-2">
       <Link  href="./cart" >Add to cart</Link>
       </button>
      </div>
      </div>
      <div className="">
     <div className="modal-action">
      <form method="dialog">
        <button className='absolute top-28 right-0 rounded-full'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="w-8 h-8">
      <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
      </svg>
      </button>
      </form>
    </div>
  </div>
  </div>
</dialog>

  </>
  )
}
