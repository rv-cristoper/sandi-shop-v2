import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = (props) => {
   const { productList } = props;
   return (
      <ItemList productList={productList} />
   )
}

export default ItemListContainer