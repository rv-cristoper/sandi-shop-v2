import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import formatPrice from '../../../assets/functions/formatPrice';
import { CartContext } from '../../../context/CartContext';
import '../scss/itemListContainer/item.scss'
import Button from '../shared/Button';

const Item = ({ details }) => {

   const { addItem } = useContext(CartContext);

   const { id, image, name, newPrice, oldPrice } = details;

   const handleUrl = (name) => name.replaceAll(' ', '-').toLowerCase();

   const addToCard = () => {
      addItem(details, 1)
   }

   return (
      <div className='main_card'>
         <Link to={`/item/${handleUrl(name)}`} state={{ details }}>
            <div className='card_1'>
               <h3>{name}</h3>
               <img src={image} alt={name} width="300" />
               <p className="product_code">{id}</p>
               <div className="prices">
                  <p className="new_price">{formatPrice(newPrice)}</p>
                  <span className="old_price">{formatPrice(oldPrice)}</span>
               </div>
            </div>
         </Link>
         <Button text='Añadir al carrito' onClick={addToCard} />
      </div>
   )
}

export default Item