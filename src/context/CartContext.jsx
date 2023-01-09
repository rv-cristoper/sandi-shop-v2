import isEmpty from 'is-empty';
import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
   const [products, setProducts] = useState([]);

   const isInCart = (itemId) => {
      try {
         const product = products.find(element => itemId === element.id)
         return !isEmpty(product)
      } catch (error) {
         return false
      }
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
      localStorage.setItem('products', JSON.stringify(newProducts))
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

   useEffect(() => {
      try {
         const productsToBuy = JSON.parse(localStorage.getItem('products'));
         if (!isEmpty(productsToBuy)) setProducts(productsToBuy)
      } catch (error) { }
   }, [])


   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider