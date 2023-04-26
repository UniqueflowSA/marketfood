import { Router } from 'express';
import { productController } from '../controllers/product-controller.js';

const productRouter = Router();

productRouter.post('/product', productController.createProduct);
productRouter.get('/product', productController.getProductList);
// 제품 등록 시 필요한 데이터 => 제품명, 아이디, 가격, , 올린 사람 
productRouter.get('/product/:productId', productController.getProduct);
productRouter.put('/product/:productId', productController.updateProduct);
productRouter.delete('/product/:productId', productController.deleteProduct);

export default productRouter;
