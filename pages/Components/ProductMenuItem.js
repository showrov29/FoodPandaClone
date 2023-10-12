import React, { useState } from 'react';

const ProductMenuItem = ({ name, description, price, image }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    // Implement cart logic here.
  };

  return (
    <li className="box-flex product-tile fd-row p-relative pa-st">
      <button
        className="product-tile__button-overlay absolute-fill-parent"
        aria-label={`${name}, Tk ${price} - Add to cart`}
        onClick={addToCart}
      />
      <div className="absolute-fill-parent product-tile__animation-overlay" />
      <div className="box-flex grow respect-flex-parent-width jc-space-between">
        <div>
          <h3 className="truncate product-tile__title">
            {name}
          </h3>
          <p className="product-tile__description">
            {description}
          </p>
        </div>
        <div className="box-flex product-tile__price-row ai-center fw-wrap fd-row">
          <p className="cl-neutral-primary f-label-large-font-size fw-label-large-font-weight lh-label-large-line-height">
            Tk {price}
          </p>
        </div>
      </div>
      <div className="box-flex product-tile__right-side-wrapper no-shrink ml-st">
        <picture className="product-tile__image">
          <img
            src={image}
            alt={name}
          />
        </picture>
        <div className="box-flex product-tile__quick-add-to-cart">
          <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 0}
          >
            -
          </button>
          <div>{quantity}</div>
          <button
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductMenuItem;
