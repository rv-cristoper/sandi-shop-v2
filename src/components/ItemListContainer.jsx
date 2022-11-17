import React from 'react'
import './scss/itemListContainer.scss'

const ItemListContainer = (props) => {
   const { message = "Página principal" } = props;
   return (
      <div className='message'>{message}</div>
   )
}

export default ItemListContainer