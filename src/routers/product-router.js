const { Router } = require("express");
const {getProdect, createProdect, updateProdect, deleteProdect} = require("../controllers/product-controller");

const productRouter = Router();

productRouter.post("/product", createProdect);
// 제품 등록 시 필요한 데이터 => 제품명, 아이디, 가격, , 올린 사람 
productRouter.get("/:productId", getProdect);
productRouter.put("/:productId", updateProdect);
productRouter.delete("/:productId", deleteProdect);


module.exports = productRouter;