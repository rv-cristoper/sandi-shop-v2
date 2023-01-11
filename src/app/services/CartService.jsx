import { addDoc, collection, getFirestore } from "firebase/firestore";
import isEmpty from "is-empty";

export const saveOrder = (data) => {
    return new Promise(async (resolve, reject) => {
        const db = getFirestore();
        const conct = collection(db, 'orders')
        const response = await addDoc(conct, data)
        if (isEmpty(response.id)) return reject({ status: false, message: 'Failed to save order.' });
        return resolve({ status: true, data: response.id });
    });
};