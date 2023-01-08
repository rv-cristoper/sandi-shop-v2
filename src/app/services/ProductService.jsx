import isEmpty from 'is-empty';
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const getProductList = (categoryId) => {
   return new Promise(async (resolve, reject) => {
      const db = getFirestore();
      const docRef = collection(db, 'items');
      const response = await getDocs(docRef);
      const allProducts = response.docs.map(data => {
         return {
            id: data.id,
            ...data.data()
         }
      })
      const productList = allProducts.filter(element => element.category === categoryId);
      if (isEmpty(productList)) return reject({ status: false, message: 'Items query error' });
      return resolve({ status: true, data: productList });
   });
};

export const getProductInfo = (name) => {
   return new Promise(async (resolve, reject) => {
      const db = getFirestore();
      const docRef = collection(db, 'items');
      const response = await getDocs(docRef);
      const allProducts = response.docs.map(data => {
         return {
            id: data.id,
            ...data.data()
         }
      })
      const productInfoByName = allProducts.find(element => element.name.toLowerCase() === name.toLowerCase());
      if (isEmpty(productInfoByName)) return reject({ status: false, message: 'Item query error' });
      return resolve({ status: true, data: productInfoByName });
   });
};