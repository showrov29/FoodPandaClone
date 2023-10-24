import React from 'react';

export default function Recomanded({
  selectedPrices,
  addSelectedPrice,
  removeSelectedPrice,
  selectedProducts,
  setSelectedProducts,
}) {
  const products = [
    { image:'/img/f1.jpeg', name: 'Chicken', price: 220 },
    { image:'/img/featured.jpeg', name: 'Chicken khichuri full', price: 251 },
    { image:'/img/featured.jpeg', name: 'Chicken khichuri full', price: 230 },
    { image:'/img/f1.jpeg', name: 'Chicken khichuri full', price: 290 },
    { image:'/img/featured.jpeg', name: 'Chicken khichuri full', price: 210 },
    { image:'/img/featured1.png', name: 'Chicken khichuri full', price: 240 },
    { image:'/img/featured1.png', name: 'Chicken khichuri full', price: 20 },
    { image:'/img/f1.jpeg', name: 'Chicken khichuri full', price: 200 },
    { image:'/img/f1.jpeg', name: 'Chicken khichuri full', price: 220 },
    { image:'/img/featured1.png', name: 'Chicken khichuri full', price: 250 },
    { image:'/img/f1.jpeg', name: 'Chicken khichuri full', price: 230 },
    { image:'/img/f1.jpeg', name: 'Chicken khichuri full', price: 290 },
    { image:'/img/f1.jpeg', name: 'Chicken khichuri full', price: 210 },
    { image:'/img/featured1.png', name: 'Chicken khichuri full', price: 220 },
    { image:'/img/f1.jpeg', name: 'Chicken khichuri full', price: 250 },
    { image:'/img/f1.jpeg', name: 'Chicken khichuri full', price: 230 },
    { image:'/img/f1.jpeg', name: 'Chicken khichuri full', price: 290 },
    { image:'/img/f1.jpeg', name: 'Chicken khichuri full', price: 210 },
  ];
  
  const handleCheckboxChange = (product) => {
    if (Array.isArray(selectedPrices)) {
      if (selectedPrices.includes(product.price)) {
        removeSelectedPrice(product.price);
        setSelectedProducts((prevSelected) =>
          prevSelected.filter((selectedProduct) => selectedProduct.price !== product.price)
        );
      } else {
        addSelectedPrice(product.price);
        setSelectedProducts((prevSelected) => [...prevSelected, product]);
      }
    } else {
      addSelectedPrice(product.price);
      setSelectedProducts([product]);
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
              onChange={() => handleCheckboxChange(product)}
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