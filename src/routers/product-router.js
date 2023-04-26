import { Router } from 'express';
import { productController } from '../controllers/product-controller.js';

const productRouter = Router();

productRouter.post('/product', productController.createProduct);
productRouter.get('/product', productController.getProductList);
productRouter.get('/product/:productId', productController.getProduct);
productRouter.put('/product/:productId', productController.updateProduct);
productRouter.delete('/product/:productId', productController.deleteProduct);

export default productRouter;
