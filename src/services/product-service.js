import { productModel } from "../db";

class ProductService {
  async addProduct(productInfo) {
    const createdNewProduct = await productModel.create(productInfo);
    return createdNewProduct;
  }

  async getProductById(productId) {
    const product = await productModel.findById(productId);
    return product;
  }

  async getProductList(pidArr) {
    if (!pidArr) {
      const productList = await productModel.findAll();
      return productList;
    } else {
      const productList = await productModel.findByIds(pidArr);
      return productList;
    }
  }

  async editProduct(productId, toUpdate) {
    const updatedProduct = await productModel.update({productId, update : toUpdate});
    return updatedProduct;
  }

  async removeProduct(productId) {
    const { removeCount } = await productModel.delete(productId);

    if(removeCount === 0 ){
      throw new Error(`${productId} 제품 삭제를 실패했습니다.`);
    }
    return {result : "success"};
  }

  async searchProduct(searchBy) {
    const productList = await productModel.search(searchBy);
    return productList;
  }
}

const productService = new ProductService();

export { productService };
