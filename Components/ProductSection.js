import React, { useState } from 'react';
import Image from 'next/image';
const ProductSection = () => {
  const [activeSection, setActiveSection] = useState('chicken'); // Default to 'chicken'

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <section className="text-gray-800 bg-white p-6">
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
 
      <div
        className={`container mx-auto p-8 ${
          activeSection === 'chicken' ? '' : 'hidden'
        }`}
        id="chicken"
      >

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-white p-4 shadow-lg">
                <Image src="/img/featured.jpeg" alt="Product 1" width="30" height="30" className="w-full h-32 object-cover mb-2"/>
                <div className="text-lg font-semibold">Product 1</div>
                <div className="text-gray-600">299</div>
            </div>
            
            
            <div className="bg-white p-4 shadow-lg">
                <Image src="/img/featured1.png" alt="Product 2" width="30" height="30" className="w-full h-32 object-cover mb-2"/>
                <div className="text-lg font-semibold">Product 2</div>
                <div className="text-gray-600">399</div>
            </div>
        </div>
      </div>

      <div
        className={`container mx-auto p-8 ${
          activeSection === 'special' ? '' : 'hidden'
        }`}
        id="special"
      >

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-white p-4 shadow-lg">
                <Image src="/img/featured.jpeg" alt="Product 1" width="30" height="30" className="w-full h-32 object-cover mb-2"/>
                <div className="text-lg font-semibold">Product 1</div>
                <div className="text-gray-600">299</div>
            </div>
            
            
            <div className="bg-white p-4 shadow-lg">
                <Image src="/img/featured2.avif" alt="Product 2" width="30" height="30" className="w-full h-32 object-cover mb-2"/>
                <div className="text-lg font-semibold">Product 2</div>
                <div className="text-gray-600">399</div>
            </div>
        </div>
      </div>


      <div
        className={`container mx-auto p-8 ${
          activeSection === 'combo' ? '' : 'hidden'
        }`}
        id="combo"
      >

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-white p-4 shadow-lg">
                <Image src="/img/featured.jpeg" alt="Product 1" width="30" height="30" className="w-full h-32 object-cover mb-2"/>
                <div className="text-lg font-semibold">Product 1</div>
                <div className="text-gray-600">299</div>
            </div>
            
            
            <div className="bg-white p-4 shadow-lg">
                <Image src="/img/featured3.avif" alt="Product 2" width="30" height="30" className="w-full h-32 object-cover mb-2"/>
                <div className="text-lg font-semibold">Product 2</div>
                <div className="text-gray-600">399</div>
            </div>
        </div>
      </div>


 
      <div
        className={`container mx-auto p-8 ${
          activeSection === 'beef' ? '' : 'hidden'
        }`}
        id="beef"
      >
        {/* <h2 className="text-2xl font-semibold mb-4">Beef Products</h2> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-white p-4 shadow-lg">
                <Image src="/img/featured2.avif" alt="Product 1" width="30" height="30" className="w-full h-32 object-cover mb-2"/>
                <div className="text-lg font-semibold">Product 1</div>
                <div className="text-gray-600">299</div>
            </div>
            
            
            <div className="bg-white p-4 shadow-lg">
                <Image src="/img/featured3.avif" alt="Product 2" width="30" height="30" className="w-full h-32 object-cover mb-2"/>
                <div className="text-lg font-semibold">Product 2</div>
                <div className="text-gray-600">399</div>
            </div>
        </div>
        
      </div>
      {/* Add more product sections for other types if needed */}
    </div>
  );
};

export default ProductSection;
