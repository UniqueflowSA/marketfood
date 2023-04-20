import productModel from "../db/models/product-model";

const createProduct = async(product) => {
  const createProduct = await productModel.Product.create(product);
  return createProduct;
}

const getProduct = async(productId) => {
  const findProduct = await productModel.Product.findOne({productId});
  return findProduct;
}

const updateProduct = async() => {

}
const deleteProduct = async (productId) => {
  
}



export default {createProduct, getProduct, updateProduct, deleteProduct};