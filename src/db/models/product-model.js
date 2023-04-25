import { model } from 'mongoose';
import { ProductSchema } from "../schemas/product-schema.js";

const Product = model('Product', ProductSchema);

class ProductModel {
  async findByTitle(title) {
    const product = await Product.findOne({ title });
    return product;
  }

  async findById(pId) {
    const product = await Product.findOne({productId: pId });
    return product;
  }

  async create(product) {
    const newProduct = await Product.create(product);
    return newProduct;
  }

  async update(productId, update) {
    const filter = { _id: productId };
    const option = { returnOriginal: false };
    const updatedProduct = await Product.findOneAndUpdate(filter, update, option);
    return updatedProduct;
  }

  async delete(productId) {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
  }
}

const productModel = new ProductModel();
export { productModel };
