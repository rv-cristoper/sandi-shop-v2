import { getProductInfo } from "../services/ProductService";

class ProductPageController {

   static getProductInfoByName = async ({
      productName,
      setProduct,
      setLoading,
      setProductExists
   }) => {
      try {
         const newProductName = productName.replaceAll('-', ' ');
         const response = await getProductInfo(newProductName);
         setProduct(response.data)
         setProductExists(true)
         return response.status;
      } catch (err) {
         return err.status;
      } finally {
         setLoading(false)
      }
   };

}

export default ProductPageController;