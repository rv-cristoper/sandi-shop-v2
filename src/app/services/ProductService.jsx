import productList from '../../assets/data/products.json'

export const getProductList = (categoryId) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         const productListByCategoryId = productList.filter(element => element.category === categoryId);
         return resolve({ status: true, data: productListByCategoryId });
      }, 2000);
   });
};

export const getProductInfo = (name) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const productInfoByName = productList.find(element => element.name.toLowerCase() === name.toLowerCase());
         if (productInfoByName === undefined) return reject({ status: false, message: 'Error querying product.' });
         return resolve({ status: true, data: productInfoByName });
      }, 2000);
   });
};