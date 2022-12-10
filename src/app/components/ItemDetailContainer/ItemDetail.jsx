import React from 'react'
import '../scss/itemDetailContainer/itemDetail.scss'
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {

   const handleStockText = () => {
      if (product.stock < 1) return <span>Producto sin stock</span>
      return <span className='success'>{`${product.stock} unidades en stock`}</span>
   }

   return (
      <div className='product'>
         <img src={`/images/${product.image}.webp`} alt={product.name} />
         <div className='details'>
            <p className='brand'>Marca del producto</p>
            <h1>{product.name}</h1>
            <p className='code'>{`Código de producto ${product.id}`}</p>
            <p className='status'>{handleStockText()}</p>
            <div className='type_price'>
               <p className='old_price'>Antes</p>
               <p className='old_price'>{product.oldPrice}</p>
            </div>
            <div className='type_price'>
               <p className='new_price'>Ahora</p>
               <p className='new_price'>{product.newPrice}</p>
            </div>
            <ItemCount stock={product.stock} />
         </div>
      </div>
   )
}

export default ItemDetail