import React, { useState } from 'react';
import Burger from './Burger';
const ProductSection = () => {
  const [activeSection, setActiveSection] = useState('chicken'); // Default to 'chicken'

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='flex flex-col '>
      <section className="text-gray-800 bg-white p-6 text-xs">
        <div className="container">
          <div className="flex space-x-4">
            <a
              href="#chicken"
              onClick={() => handleNavigation('chicken')}
              className={`hover:underline hover:text-pink-500 ${
                activeSection === 'chicken' ? 'font-bold text-pink-600' : ''
              }`}
            >
              Chicken Burger
            </a>
            <a
              href="#beef"
              onClick={() => handleNavigation('beef')}
              className={`hover:underline hover:text-pink-500 ${
                activeSection === 'beef' ? 'font-bold text-pink-600' : ''
              }`}
            >
              Beef Burger
            </a>
            <a
              href="#combo"
              onClick={() => handleNavigation('combo')}
              className={`hover:underline hover:text-pink-500 ${
                activeSection === 'combo' ? 'font-bold text-pink-600' : ''
              }`}
            >
             Exclusive Combo
            </a>
            <a
              href="#special"
              onClick={() => handleNavigation('special')}
              className={`hover:underline hover:text-pink-500 ${
                activeSection === 'special' ? 'font-bold text-pink-600' : ''
              }`}
            >
               Special Burger
            </a>
          </div>
        </div>
      </section>
      <hr />
     <div className="font-sans md:font-serif">
      <div
        className={`container mx-auto p-8 ${
          activeSection === 'chicken' ? '' : 'hidden'
        }`}
        id="chicken"
      >
        <Burger src="/img/featured.jpeg" title='Chicken burger' description='Very very special' price='399' />
        <Burger src="/img/featured.jpeg" title='Chicken burger' description='Very very special' price='399' />
        <Burger src="/img/featured.jpeg" title='Chicken burger' description='Very very special' price='399' />
        <Burger src="/img/featured.jpeg" title='Chicken burger' description='Very very special' price='399' />
        <Burger src="/img/featured.jpeg" title='Chicken burger' description='Very very special' price='399' />
        <Burger src="/img/featured.jpeg" title='Chicken burger' description='Very very special' price='399' />
        <Burger src="/img/featured.jpeg" title='Chicken burger' description='Very very special' price='399' />
        <Burger src="/img/featured.jpeg" title='Chicken burger' description='Very very special' price='399' />
        <Burger src="/img/featured.jpeg" title='Chicken burger' description='Very very special' price='399' />
      </div> 

      <div
        className={`container mx-auto p-8 ${
          activeSection === 'special' ? '' : 'hidden'
        }`}
        id="special"
      >
        <Burger src="/img/featured.jpeg" title='Special burger' description='Very very special' price='299'/> 
        <Burger src="/img/featured.jpeg" title='Special burger' description='Very very special' price='299'/> 
        <Burger src="/img/featured.jpeg" title='Special burger' description='Very very special' price='299'/> 

      </div> 


      <div
        className={`container mx-auto p-8 ${
          activeSection === 'combo' ? '' : 'hidden'
        }`}
        id="combo"
      >
        <Burger src="/img/featured.jpeg" title='Combo burger' description='Very very special' price='299'/> 
        <Burger src="/img/featured.jpeg" title='Combo burger' description='Very very special' price='299'/> 
        <Burger src="/img/featured.jpeg" title='Combo burger' description='Very very special' price='299'/> 

      </div> 


 
      <div
        className={`container mx-auto p-8 ${
          activeSection === 'beef' ? '' : 'hidden'
        }`}
        id="beef"
      >
        <Burger src="/img/featured.jpeg" title='Beef burger' description='Very very special' price='299'/> 
        <Burger src="/img/featured.jpeg" title='Combo burger' description='Very very special' price='299'/> 
        <Burger src="/img/featured.jpeg" title='Combo burger' description='Very very special' price='299'/> 
      </div>
      {/* Add more product sections for other types if needed */}
    </div>
    </div>
  );
};

export default ProductSection;
