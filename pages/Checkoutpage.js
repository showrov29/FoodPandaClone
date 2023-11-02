import React from 'react'
import Checkout from './Components/Checkout'
import { useRouter } from 'next/router';

export default function Checkoutpage() {
  const router = useRouter();

  return (
    <div>
      
    <Checkout/>
    </div>
  )
}
