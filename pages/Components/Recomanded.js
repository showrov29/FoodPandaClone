import React from 'react';

export default function Recomanded({
  selectedPrices,
  addSelectedPrice,
  removeSelectedPrice,
  selectedProducts,
  setSelectedProducts,
}) {
  const products = [
    {  name: 'Chicken khichuri full', price: 10 },
    {  name: 'Chicken khichuri full', price: 20 },
    {  name: 'Chicken khichuri full', price: 30 },
    {  name: 'Chicken khichuri full', price: 40 },
    {  name: 'Chicken khichuri full', price: 50 },
    {  name: 'Chicken khichuri full', price: 60 },
    {  name: 'Chicken khichuri full', price: 70 },
    {  name: 'Chicken khichuri full', price: 80 },
    {  name: 'Chicken khichuri full', price: 90 },
    {  name: 'Chicken khichuri full', price: 11 },
    {  name: 'Chicken khichuri full', price: 22 },
    {  name: 'Chicken khichuri full', price: 33 },
    {  name: 'Chicken khichuri full', price: 44 },
    {  name: 'Chicken khichuri full', price: 55 },
    {  name: 'Chicken khichuri full', price: 66 },
    {  name: 'Chicken khichuri full', price: 77 },
    {  name: 'Chicken khichuri full', price: 88 },
    {  name: 'Chicken khichuri full', price: 99 },
    
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
    <div className="px-4 my-4 text-base mb-80">
      {products.map((product, index) => (
        <div className="py-4 flex justify-between" key={index}>
          <div className='flex justify-start'>
            <input
              type="checkbox"
              id={`${index}`}
              name=""
              value=""
              className="w-5 h-5 pt-4 checkbox checkbox-secondary"
              onChange={() => handleCheckboxChange(product)}
            />
            <label htmlFor={`${index}`} className="pl-2">
              {product.name}
            </label>
          </div>
          <p className='price-colour'>+Tk {product.price}</p>
        </div>
      ))}
    </div>
  );
} 