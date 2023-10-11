import React, {useEffect, useState} from 'react'

export default function Modal(props) {
const [flag,setFlag]=useState(false)
useEffect(() => {
    setFlag(props.flag)
    console.log(props);
    if (flag){
       document.getElementById('my_modal_5').showModal()
    }
    else {

    }
   },[])
   
   const [quantity, setQuantity] = useState(0);

   const addToCart = () => {
     // Implement cart logic here.
   };

    
  return (
  <>

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
<div className='modal-box w-auto h-auto'>

      <button
        className="product-tile__button-overlay absolute-fill-parent"
        onClick={addToCart}
      />
      <div className="absolute-fill-parent product-tile__animation-overlay" />
      <div className="box-flex grow respect-flex-parent-width jc-space-between">
        <div>
          <h3 className="truncate product-tile__title">
            {props.title}
          </h3>
          <p className="product-tile__description">
            {props.description}
          </p>
        </div>
        <div className="box-flex product-tile__price-row ai-center fw-wrap fd-row">
          <p className="cl-neutral-primary f-label-large-font-size fw-label-large-font-weight lh-label-large-line-height">
             {props.price}
          </p>
        </div>
      </div>
      <div className="box-flex product-tile__right-side-wrapper no-shrink ml-st">
        {/* <picture className="product-tile__image">
          <img
            src={image}
          />
        </picture> */}
        <div className="box-flex product-tile__quick-add-to-cart flex flex-col-4">
          <button className='font-light	 text-4xl pl-8 text-pink-500'
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 0}
          >
            -
          </button>
          <div className='font-thin text-2xl px-2 mt-2'>{quantity}</div>
          <button className='font-light	 text-4xl color-pink pr-12 text-pink-500'
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
          <button className="btn btn-secondary hover:scale-105 transition-all">Add to cart</button>
        </div>
      </div>
      <div className="">
    <div className="modal-action">
      <form method="dialog">
        <button  className="btn">Close</button>
      </form>
    </div>
  </div>
    {/* </li> */}
    </div>

</dialog>

  </>
  )
}
