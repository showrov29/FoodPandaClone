import React from 'react';
import Cartview from './Components/Cartview';
import { useRouter } from 'next/router';

const cart = () => {
  const router = useRouter();
  const handleDelete = (data) => {
    
    console.log('Delete item:', data);
  };
  return (
    <>
    <div className=''>
      
    </div>
      <Cartview onDelete={handleDelete} />
    
    </>
  );
};

export default cart;
