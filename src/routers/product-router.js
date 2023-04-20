const { Router } = require("express");
const {getProdect, createProdect, updateProdect, deleteProdect} = require("../controller/product-controller")

const productRouter = Router();

productRouter.get("/", getProdect);
productRouter.post("/", createProdect);
// 제품 등록 시 필요한 데이터 => 제품명, 아이디, 가격, , 올린 사람 
productRouter.put("/", updateProdect);
productRouter.delete("/", deleteProdect);


module.exports = productRouter;