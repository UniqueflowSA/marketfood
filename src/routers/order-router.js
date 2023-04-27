import { Router } from "express";
import  orderController  from "../controllers/order-controller.js";
import { adminOnly, loginRequired } from "../middlewares/index.js";

const orderRouter = Router();

//사용자
orderRouter.post("/orders", loginRequired, orderController.createOrder);
orderRouter.get("/orders", loginRequired, orderController.getOrderAll);
orderRouter.get("/orders/:productId", loginRequired, orderController.getOrderOne);
orderRouter.patch("/orders/:productId", loginRequired, orderController.updateOrder);
orderRouter.delete("/orders/:productId", loginRequired, orderController.deleteOrder);

//관리자

orderRouter.get("/admin/orders/", adminOnly, orderController.getAdminAllOrders);




export default orderRouter


