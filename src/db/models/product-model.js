import { model } from 'mongoose';
import { ProductSchema } from '../schemas/product-schema';

const Product = model('Products', ProductSchema);

class ProductModel {

  async findByTitle(title) {
  const Product = await Product.findOne({ title });
  return Product;
  }

  async findById(productId) {
    const Product = await Product.findOne({ _id:productId });
    return Product;
    }

  async create(product) {
    const newProduct = await Product.create(product);
    return newProduct;
  }

  async update(id, update) {
    const updatedProduct = await Product.findByIdAndUpdate(id, update, {
      new: true,
    });
    return updatedProduct;
  }

  async delete(id) {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
  }
}

export const ProductModel = new ProductModel();
