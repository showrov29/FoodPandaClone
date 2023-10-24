import React from 'react';

export default function Recomanded({
  selectedPrices,
  addSelectedPrice,
  removeSelectedPrice,
  selectedProducts,
  setSelectedProducts,
}) {
  const products = [
    {  name: 'Chicken', price: 220 },
    {  name: 'Chicken khichuri full', price: 251 },
    {  name: 'Chicken khichuri full', price: 230 },
    {  name: 'Chicken khichuri full', price: 290 },
    {  name: 'Chicken khichuri full', price: 210 },
    {  name: 'Chicken khichuri full', price: 240 },
    {  name: 'Chicken khichuri full', price: 20 },
    {  name: 'Chicken khichuri full', price: 200 },
    {  name: 'Chicken khichuri full', price: 220 },
    {  name: 'Chicken khichuri full', price: 250 },
    {  name: 'Chicken khichuri full', price: 230 },
    {  name: 'Chicken khichuri full', price: 290 },
    {  name: 'Chicken khichuri full', price: 210 },
    {  name: 'Chicken khichuri full', price: 220 },
    {  name: 'Chicken khichuri full', price: 250 },
    {  name: 'Chicken khichuri full', price: 230 },
    {  name: 'Chicken khichuri full', price: 290 },
    {  name: 'Chicken khichuri full', price: 210 },
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
          <p className='price-colour'>+Tk {product.price}</p>
        </div>
      ))}
    </div>
  );
}