import React, { useContext } from 'react'
import '../scss/itemDetailContainer/itemDetail.scss'
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'
import { CartContext } from '../../../context/CartContext'
import formatPrice from '../../../assets/functions/formatPrice';

const ItemDetail = ({ product }) => {

   const { isInCart, addItem } = useContext(CartContext);

   const handleStockText = () => {
      if (product.stock < 1) return <span>Producto sin stock</span>
      return <span className='success'>{`${product.stock} unidades en stock`}</span>
   }

   const handleAddItem = (quantity) => {
      addItem(product, quantity)
   }

   return (
      <div className='product'>
         <img src={product.image} alt={product.name} />
         <div className='details'>
            <p className='brand'>Marca del producto</p>
            <h1>{product.name}</h1>
            <p className='code'>{`Código de producto ${product.id}`}</p>
            <p className='status'>{handleStockText()}</p>
            <div className='type_price'>
               <p className='old_price'>Antes</p>
               <p className='old_price'>{formatPrice(product.oldPrice)}</p>
            </div>
            <div className='type_price'>
               <p className='new_price'>Ahora</p>
               <p className='new_price'>{formatPrice(product.newPrice)}</p>
            </div>
            {
               !isInCart(product.id) ?
                  <ItemCount stock={product.stock} onClick={handleAddItem} /> :
                  <>
                     <p className='status'><span>Este producto ya fue añadido al carrito</span></p>
                     <Link to='../cart' className='btn-dark'>Terminar mi compra</Link>
                  </>
            }
         </div>
      </div>
   )
}

export default ItemDetail