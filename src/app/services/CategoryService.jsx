import categoryList from '../../assets/data/categories.json'

export const getCategoryInfo = (categoryId) => {
   return new Promise((resolve, reject) => {
      const categoryInfo = categoryList.find(element => element.id === categoryId);
      if (categoryInfo === undefined) return reject({ status: false, message: 'Error querying category.' });
      return resolve({ status: true, data: categoryInfo });
   });
};