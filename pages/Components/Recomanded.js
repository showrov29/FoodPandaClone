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
    <div className="bg-slate-100">
      <div>
        <h1 className="font-semibold text-lg pl-4">Frequently bought together</h1>
        <p className="font-light text-xs pl-4">Other customers also ordered these</p>
      </div>

      <div className="px-4 my-4 text-base">
        {products.map((product, index) => (
          <div className="py-4 flex justify-between" key={index}>
            <div>
              <input type="checkbox" id="cb1" name="" value="" className="w-4 h-4" onChange={() => handleCheckboxChange(product.price)} />
              <label htmlFor="cb1" className="pl-2">
                {product.name}
              </label>
            </div>
            <p>+Tk {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
