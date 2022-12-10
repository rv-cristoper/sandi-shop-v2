import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetailContainer/ItemDetail'
import Loader from '../components/shared/Loader'
import ProductPageController from '../controllers/ProductPageController'
import './scss/productPage.scss'

const ProductPage = () => {
   const [product, setProduct] = useState({})
   const [loading, setLoading] = useState(true)
   const [productExists, setProductExists] = useState(false)

   const location = useLocation();
   const { id } = useParams();

   const data = location.state?.details;

   useEffect(() => {
      if (data !== undefined) {
         setTimeout(() => {
            setProduct(data)
            setLoading(false)
            setProductExists(true)
         }, 2000);
      } else {
         ProductPageController.getProductInfoByName({
            productName: id,
            setProduct,
            setLoading,
            setProductExists
         })
      }
   }, [data, id])

   return (
      <main className="main_product">
         <div className="page_space">
            {!loading ?
               (productExists ?
                  <ItemDetail product={product} /> :
                  <div>El producto no existe</div>
               ) :
               <Loader text='Buscando producto...' />
            }
         </div>
      </main>
   )
}

export default ProductPage