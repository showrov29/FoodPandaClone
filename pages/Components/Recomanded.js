import React from 'react';

export default function Recommended({ selectedPrices, addSelectedPrice, removeSelectedPrice }) {
  const products = [
    { name: 'Chicken khichuri full', price: 220 },
    { name: 'Chicken khichuri full', price: 250 },
    { name: 'Chicken khichuri full', price: 230 },
    { name: 'Chicken khichuri full', price: 290 },
    { name: 'Chicken khichuri full', price: 210 },
    { name: 'Chicken khichuri full', price: 240 },
    { name: 'Chicken khichuri full', price: 20 },
    { name: 'Chicken khichuri full', price: 200 },
    { name: 'Chicken khichuri full', price: 220 },
    { name: 'Chicken khichuri full', price: 250 },
    { name: 'Chicken khichuri full', price: 230 },
    { name: 'Chicken khichuri full', price: 290 },
    { name: 'Chicken khichuri full', price: 210 },
    { name: 'Chicken khichuri full', price: 220 },
    { name: 'Chicken khichuri full', price: 250 },
    { name: 'Chicken khichuri full', price: 230 },
    { name: 'Chicken khichuri full', price: 290 },
    { name: 'Chicken khichuri full', price: 210 },
  ];
  
  const handleCheckboxChange = (price) => {
    if (Array.isArray(selectedPrices)) {
      if (selectedPrices.includes(price)) {
        removeSelectedPrice(price);
      } else {
        addSelectedPrice(price);
      }
    } else {
      addSelectedPrice(price);
    }
  };

  return (
    <div className="px-4 my-4 text-base">
  {products.map((product, index) => (
    <div className="py-4 flex justify-between" key={index}>
      <div id='cb1'>
        <input
          type="checkbox"
          id={`${index}`}
          name=""
          value=""
          className="w-5 h-5"
          onChange={() => handleCheckboxChange(product.price)}
        />
        <label htmlFor={`${index}`} className="pl-2">
          {product.name}
        </label>
      </div>
      <p>+Tk {product.price}</p>
    </div>
  ))}
</div>


  );
}
