import { addDoc, collection, getFirestore } from "firebase/firestore";
import isEmpty from "is-empty";

export const saveSubscription = (email) => {
   return new Promise(async (resolve, reject) => {
      const db = getFirestore();
      const subsc = collection(db, 'subscription')
      const response = await addDoc(subsc, { email })
      if (isEmpty(response.id)) return reject({ status: false, message: 'Failed to save subscription.' });
      return resolve({ status: true, data: response.id });
   });
};

export const saveContact = (data) => {
   return new Promise(async (resolve, reject) => {
      const db = getFirestore();
      const conct = collection(db, 'contact')
      const response = await addDoc(conct, data)
      if (isEmpty(response.id)) return reject({ status: false, message: 'Failed to save contact.' });
      return resolve({ status: true, data: response.id });
   });
};