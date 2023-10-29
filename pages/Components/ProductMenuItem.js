import React, { useState } from 'react';

const ProductMenuItem = ({ name, description, price, image }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    // Implement cart logic here.
  };

  return (
    <li className="flex justify-between">
        <div className="">
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
    </li>
  );
};

export default ProductMenuItem;
