import formatPrice from "../../assets/functions/formatPrice";
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
         const newList = response.data.map(element => {
            return {
               ...element,
               "newPrice": formatPrice(element.newPrice),
               "oldPrice": formatPrice(element.oldPrice)
            }
         })
         setProductList(newList)
         return true;
      } catch (err) {
         return false;
      }
      finally {
         setLoadingProducts(false)
      }
   };

}

export default CategoryPageController;