import { productService } from "../services/product-service.js";

const createProduct = async (req, res, next) => {
  try {
    const product = req.body;
    const createdProduct = await productService.createProduct(product);

    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const foundProduct = await productService.getProduct(productId);

    res.status(200).json(foundProduct);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const updatedInfo = req.body;
    const updatedProduct = await productService.updateProduct(productId, updatedInfo);

    res.status(200).json(updateProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    await productService.deleteProduct(productId);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export { createProduct, getProduct, updateProduct, deleteProduct };
