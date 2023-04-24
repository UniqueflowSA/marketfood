import { productService } from "../services/product-service";

const createProdect = async (req, res, next) => {
  try {
    const product = req.body;
    const createdProduct = await productService.createProdect(product);

    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

const getProdect = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const foundProduct = await productService.getProdect(productId);

    res.status(200).json(foundProduct);
  } catch (error) {
    next(error);
  }
};

const updateProdect = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const updatedInfo = req.body;
    const updatedProduct = await productService.updateProdect(productId, updatedInfo);

    res.status(200).json(updateProdect);
  } catch (error) {
    next(error);
  }
};

const deleteProdect = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    await productService.deleteProduct(productId);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export { createProdect, getProdect, updateProdect, deleteProdect };
