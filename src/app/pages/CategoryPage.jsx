import React from 'react'
import './scss/categoryPage.scss'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ProductList from '../data/products.json'

const CategoryPage = () => {
   return (
      <main className="main_category_product">
         <div className="page_space">
            <section className="banner">
               <div className="banner_information">
                  <h1>Categoría</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequuntur quaerat iure libero quae sed?</p>
               </div>
            </section>
            <ItemListContainer productList={ProductList} />
         </div>
      </main>
   )
}

export default CategoryPage