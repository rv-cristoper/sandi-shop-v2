import { collection, getDocs, getFirestore } from "firebase/firestore";
import isEmpty from "is-empty";

export const getCategoryInfo = (categoryId) => {
   return new Promise(async (resolve, reject) => {
      const db = getFirestore();
      const docRef = collection(db, 'categories');
      const response = await getDocs(docRef);
      const categoryList = response.docs.map(data => {
         return {
            id: data.id,
            ...data.data()
         }
      })
      const categoryInfo = categoryList.find(element => element.idCategory === categoryId);
      if (isEmpty(categoryInfo)) return reject({ status: false, message: 'Category query error.' });
      return resolve({ status: true, data: categoryInfo });
   });
};