import React, { useEffect, useCallback, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import CategoryPageController from '../controllers/CategoryPageController'
import Loader from '../components/shared/Loader'
import './scss/categoryPage.scss'
import isEmpty from 'is-empty'

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

   // const getItemData = () => {
   //    const db = getFirestore();
   //    const docRef = doc(db, 'items', '3IbrnDSU66gW5cttvjg5');
   //    getDoc(docRef).then((snapshot) => {
   //       // console.log({ id: snapshot.id, ...snapshot.data() })
   //    })
   // }

   // const getItems = () => {
   //    const db = getFirestore();
   //    const docRef = collection(db, 'items',);
   //    getDocs(docRef).then((snapshot) => {
   //       console.log(snapshot.docs.map(data => {
   //          return {
   //             id: data.id,
   //             ...data.data()
   //          }
   //       }))
   //    })
   // }

   // const makeOrder = () => {
   //    const user = { name: "Carlos", phone: "123456789", email: "carlos@Gmail.com" }
   //    const items = [
   //       {
   //          "id": "3IbrnDSU66gW5cttvjg5",
   //          "price": 200,
   //          "stock": 10,
   //          "title": "Galaxy"
   //       }
   //    ]
   //    const order = {
   //       buyer: user,
   //       items
   //    }
   //    saveOrder(order)
   // }

   // const saveOrder = async (order) => {
   //    const db = getFirestore();
   //    const orderCollection = collection(db, 'orders')
   //    const { id } = await addDoc(orderCollection, order)
   //    console.log(id)
   // }

   // const updateOrder = (id) => {
   //    const db = getFirestore();
   //    const orderDoc = doc(db, 'orders', id)
   //    updateDoc(orderDoc, {
   //       buyer: { name: "cristoper runco contreras", phone: "123456789", email: "jhanfranco01@Gmail.com" },
   //       total: 400
   //    }).then(res => {
   //       console.log(res)
   //    })
   // }

   // const makeBatch = () => {
   //    const db = getFirestore();
   //    const order1 = doc(db, 'orders', 'MqGnD7wwstfbF4VSErT8')
   //    const order2 = doc(db, 'orders', 'di2ouLRdIdlQ6LxAumuV')
   //    const batch = writeBatch(db)
   //    batch.update(order1, { total: 100 })
   //    batch.update(order2, { total: 123 })
   //    batch.commit()
   // }

   useEffect(() => {
      handleCategoryPage();
      // getItemData();
      // // getItems();
   }, [handleCategoryPage])

   // return (
   //    <div>
   //       <button onClick={makeOrder}>Generar orden</button>
   //       <button onClick={() => updateOrder('NMRIKSp5PuQO9mRAZGpg')}>Actualizar orden</button>
   //       <button onClick={makeBatch}>Batch</button>
   //    </div>
   // )

   return (
      <>
         {categoryInfo !== null &&
            <main className="main_category_product">
               <div className="page_space">
                  <section className={`banner ${id}`} style={{ backgroundImage: `url(${categoryInfo.image})` }}>
                     <div className="banner_information">
                        <h1>{categoryInfo.name}</h1>
                        <p>{categoryInfo.description}</p>
                     </div>
                  </section>
                  {loadingProducts ?
                     <div className='main_loader_list'>
                        <Loader text='Cargando productos...' />
                     </div> :
                     !isEmpty(productList) ?
                        <ItemListContainer productList={productList} /> :
                        <div className='product_space'><h2 className='no_products'>Sin productos para esta categoría</h2></div>
                  }
               </div>
            </main>
         }
      </>
   )
}

export default CategoryPage