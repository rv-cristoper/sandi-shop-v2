import React from 'react'
import '../scss/itemListContainer/item.scss'

const Item = ({ details }) => {
   const { id, image, name, newPrice, oldPrice } = details;
   return (
      <div className='card_1'>
         <h3>{name}</h3>
         <img src={`/images/${image}.webp`} alt="pulsera" width="300" />
         <p className="product_code">{id}</p>
         <div className="prices">
            <p className="new_price">{newPrice}</p>
            <span className="old_price">{oldPrice}</span>
         </div>
         <button className='btn btn-dark'>
            Añadir al carrito
         </button>
      </div>
   )
}

export default Item