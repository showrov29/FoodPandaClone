import React from 'react';
import Review from './Components/Review';
import { useRouter } from 'next/router';

const Reviewpage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  }
  return (
    <>
    <div>
    <Review/>
    </div>
    
    </>
  );
};

export default Reviewpage;
