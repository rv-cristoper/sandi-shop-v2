import React, { useEffect, useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import CategoryPageController from '../controllers/CategoryPageController'
import Loader from '../components/shared/Loader'
import './scss/categoryPage.scss'

const CategoryPage = () => {

   const navigate = useNavigate();
   const { id } = useParams();

   const [categoryInfo, setCategoryInfo] = useState(null);
   const [loadingProducts, setLoadingProducts] = useState(true);
   const [productList, setProductList] = useState([]);

   const handleCategoryPage = useCallback(async () => {
      const categoryInfo = await CategoryPageController.getCategoryInfoById({
         categoryId: id,
         setCategoryInfo
      })
      if (!categoryInfo) return navigate('/');
      CategoryPageController.getProducsByCategoryId({
         categoryId: id,
         setLoadingProducts,
         setProductList
      })
   }, [id, navigate])

   useEffect(() => {
      handleCategoryPage();
   }, [handleCategoryPage])

   return (
      <>
         {categoryInfo !== null &&
            <main className="main_category_product">
               <div className="page_space">
                  <section className="banner">
                     <div className="banner_information">
                        <h1>{categoryInfo.name}</h1>
                        <p>{categoryInfo.description}</p>
                     </div>
                  </section>
                  {loadingProducts ?
                     <div className='main_loader_list'>
                        <Loader text='Cargando productos...' />
                     </div>
                     :
                     <ItemListContainer productList={productList} />
                  }
               </div>
            </main>
         }
      </>
   )
}

export default CategoryPage