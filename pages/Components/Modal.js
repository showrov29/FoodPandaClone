import React, {useEffect, useState} from 'react'
import Cartview from './Cartview'
import Link from 'next/link';
export default function Modal(props) {
const [flag,setFlag]=useState(false)
useEffect(() => {
    setFlag(props.flag)
    // console.log(props);
    if (flag){
       document.getElementById('my_modal_5').showModal()
    }
    else {

    }
   },[])
   
   const [quantity, setQuantity] = useState(1);

   const addToCart = () => {
     
   };
  //  function handleButtonClick1() {
  //   return (
  //     <Link href="./cart">
  //     </Link>
  //   );
  // }

    
  return (
  <>

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
<div className='modal-box w-full h-1/3'>
<h2 className="font-bold font-mono text-pink-400 text-center">Select Quantity</h2>
      <button
        className="product-tile__button-overlay absolute-fill-parent"
        onClick={addToCart}
      />
      <div className="absolute-fill-parent product-tile__animation-overlay" />
      <div className="box-flex grow respect-flex-parent-width jc-space-between">
        <div>
          <h3 className="truncate product-tile__title text-lg font-semibold">
            {props.title}
          </h3>
          {/* <p className="product-tile__description">
            {props.description}
          </p> */}
        </div>
        <div className="box-flex product-tile__price-row ai-center fw-wrap fd-row">
          <p className="cl-neutral-primary f-label-large-font-size fw-label-large-font-weight lh-label-large-line-height">Total Price:{' '}
             {props.price * quantity}
          </p>
        </div>
      </div>
      <div className="box-flex product-tile__right-side-wrapper no-shrink ml-st">
        {/* <picture className="product-tile__image">
          <img
            src={props.src}
          />
        </picture> */}
        <div className="box-flex product-tile__quick-add-to-cart flex flex-col-4">
          <button className='font-light	 text-xl pl-8 text-pink-500'
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 0}
          >
            -
          </button>
          <div className='font-thin text-lg px-2 mt-3'>{quantity}</div>
          <button className='font-light	 text-xl color-pink pr-12 text-pink-500'
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
          
          <Link className="btn btn-secondary hover:scale-105 transition-all font-sans md:font-serif" href="./cart" >Add to cart</Link>
        </div>
      </div>
      <div className="">
    <div className="modal-action">
      <form method="dialog">
        <button className='absolute bottom-32 right-4 rounded-full'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="w-8 h-8">
      <path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"></path><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"></path>
      </svg>
      </button>
        {/* <button  className="btn">Close</button> */}
      </form>
    </div>
  </div>
    {/* </li> */}
    </div>
    {/* <Cartview title={props.title}/> */}
</dialog>

  </>
  )
}
