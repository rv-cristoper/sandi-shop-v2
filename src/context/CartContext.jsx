import isEmpty from 'is-empty';
import React, { useState } from 'react'

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
   const [products, setProducts] = useState([]);

   const isInCart = (itemId) => {
      const product = products.find(element => itemId === element.id)
      return !isEmpty(product)
   }

   const addItem = (item, quantity) => {
      const newProducts = [
         ...products,
         {
            ...item,
            quantity
         }
      ]
      setProducts(newProducts)
   }

   const removeItem = (itemId) => {
      const newProducts = products.filter(element => itemId === element.id)
      setProducts(newProducts)
   }

   const clear = () => {
      setProducts([])
   }

   const value = {
      products,
      isInCart,
      addItem,
      removeItem,
      clear
   };

   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider