import { getCategoryInfo } from "../services/CategoryService";
import { getProductList } from "../services/ProductService";

class CategoryPageController {

   static getCategoryInfoById = async ({
      categoryId,
      setCategoryInfo
   }) => {
      try {
         const response = await getCategoryInfo(categoryId)
         setCategoryInfo(response.data)
         return response.status;
      } catch (err) {
         return err.status;
      }
   };

   static getProducsByCategoryId = async ({
      categoryId,
      setLoadingProducts,
      setProductList
   }) => {
      try {
         setLoadingProducts(true)
         const response = await getProductList(categoryId)
         setProductList(response.data)
         return response.status;
      } catch (err) {
         return err.status;
      }
      finally {
         setLoadingProducts(false)
      }
   };

}

export default CategoryPageController;