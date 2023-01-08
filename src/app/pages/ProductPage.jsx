import isEmpty from 'is-empty'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetailContainer/ItemDetail'
import Loader from '../components/shared/Loader'
import ProductPageController from '../controllers/ProductPageController'
import './scss/productPage.scss'

const ProductPage = () => {
   const [product, setProduct] = useState({})
   const [loading, setLoading] = useState(true)

   const location = useLocation();
   const { id } = useParams();

   const data = location.state?.details;

   useEffect(() => {
      if (!isEmpty(data)) {
         setProduct(data)
         setLoading(false)
      } else {
         ProductPageController.getProductInfoByName({
            productName: id,
            setProduct,
            setLoading
         })
      }
   }, [data, id])

   return (
      <main className="main_product">
         <div className="page_space">
            {!loading ?
               (!isEmpty(product) ?
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