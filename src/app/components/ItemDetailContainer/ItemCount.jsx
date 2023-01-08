import React, { useState } from 'react'
import Button from '../shared/Button'
import '../scss/itemDetailContainer/itemCount.scss'

const ItemCount = ({ stock, onClick }) => {
   const [counter, setCounter] = useState(1);

   const status = stock < 1;

   const increase = () => {
      if (!status && counter < stock) {
         setCounter(count => count + 1);
      }
   };

   const decrease = () => {
      if (!status && counter > 1) {
         setCounter(count => count - 1);
      }
   };

   const iconLeft = (status || counter <= 1) ? 'no_action' : '';
   const iconRight = (status || counter >= stock) ? 'no_action' : '';

   return (
      <div className='item_count'>
         <div className='counter'>
            <i className={`fa-solid fa-minus decrement ${iconLeft}`} onClick={decrease} disabled={true} />
            {counter}
            <i className={`fa-solid fa-plus increment ${iconRight}`} onClick={increase} />
         </div>
         <Button text='Añadir al carrito' disabled={status} onClick={() => onClick(counter)} />
      </div>
   )
}

export default ItemCount