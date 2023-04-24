import { Router } from "express";
import {createProduct, getProduct, updateProduct, deleteProduct} from "../controllers/product-controller.js";

const productRouter = Router();

productRouter.post("/", createProduct);
// 제품 등록 시 필요한 데이터 => 제품명, 아이디, 가격, , 올린 사람 
productRouter.get("/:productId", getProduct);
productRouter.put("/:productId", updateProduct);
productRouter.delete("/:productId", deleteProduct);


export default productRouter;
