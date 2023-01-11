import isEmpty from 'is-empty';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

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
      if (item.stock === 0) return Swal.fire({
         icon: 'warning',
         title: 'Este producto no cuenta con stock disponible.',
         width: '400px',
         showConfirmButton: false,
         timer: 2000
      })

      const exist = isInCart(item.id);
      if (exist) {
         return Swal.fire({
            icon: 'warning',
            title: 'El producto ya fue añadido al carrito.',
            width: '400px',
            showConfirmButton: false,
            timer: 2000
         })
      }
      const newProducts = [
         ...products,
         {
            ...item,
            quantity
         }
      ]
      setProducts(newProducts)
      localStorage.setItem('products', JSON.stringify(newProducts))
      Swal.fire({
         icon: 'success',
         title: 'Producto añadido al carrito.',
         width: '400px',
         showConfirmButton: false,
         timer: 2000
      })
   }

   const removeItem = (itemId) => {
      const newProducts = products.filter(element => itemId === element.id)
      setProducts(newProducts)
   }

   const clear = () => {
      setProducts([])
      localStorage.removeItem('products')
   }

   const totalItems = () => {
      if (isEmpty(products)) return 0;
      return products.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);
   }

   const totalPrice = () => {
      if (isEmpty(products)) return 0;
      return products.reduce((previousValue, currentValue) => previousValue + (currentValue.quantity * currentValue.newPrice), 0);
   }

   const value = {
      products,
      isInCart,
      addItem,
      removeItem,
      clear,
      totalItems,
      totalPrice
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