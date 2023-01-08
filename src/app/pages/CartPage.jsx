import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

const CartPage = () => {
   const { products } = useContext(CartContext);
   console.log(products)
  return (
    <div>CartPage</div>
  )
}

export default CartPage