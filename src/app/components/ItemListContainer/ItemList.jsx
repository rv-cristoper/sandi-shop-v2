import React from 'react'
import Item from './Item'

const ItemList = (props) => {
   const { productList } = props;
   return (
      <div className='product_space'>
         {
            productList.map((data, index) =>
               <Item details={data} key={index} />
            )
         }
      </div>
   )
}

export default ItemList