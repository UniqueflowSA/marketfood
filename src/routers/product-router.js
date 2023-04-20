const {Router} = require("express");
const {getProdect, createProdect, updateProdect, deleteProdect} = require("")

const productRouter = Router();

productRouter.get("/", getProdect);
productRouter.post("/", createProdect);
productRouter.put("/", updateProdect);
productRouter.delete("/", deleteProdect);


module.exports = productRouter;