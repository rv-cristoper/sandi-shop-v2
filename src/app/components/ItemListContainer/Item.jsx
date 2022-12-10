import React from 'react'
import { Link } from 'react-router-dom';
import '../scss/itemListContainer/item.scss'
import Button from '../shared/Button';

const Item = ({ details }) => {
   const { id, image, name, newPrice, oldPrice } = details;
   const handleUrl = (name) => name.replaceAll(' ', '-').toLowerCase();
   return (
      <Link to={`/item/${handleUrl(name)}`} state={{ details }}>
         <div className='card_1'>
            <h3>{name}</h3>
            <img src={`/images/${image}.webp`} alt="pulsera" width="300" />
            <p className="product_code">{id}</p>
            <div className="prices">
               <p className="new_price">{newPrice}</p>
               <span className="old_price">{oldPrice}</span>
            </div>
            <Button text='Añadir al carrito' />
         </div>
      </Link>
   )
}

export default Item