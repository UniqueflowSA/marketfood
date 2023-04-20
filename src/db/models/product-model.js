import { model } from 'mongoose';
import { ProductSchema } from '../schemas/product-schema';

const Product = model('Product', ProductSchema);

class ProductModel {
  async findProductId(id) {
  const Product = await Product.findOne({ id });
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
