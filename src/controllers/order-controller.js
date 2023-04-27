import { orderService } from "../services/order-service.js";

export default {
  // async createOrder(req, res, next) {
  //   // req 에서 데이터 가져오기
  //   const { summaryTitle, totalPrice, address, request } = req.body;
  //   const userId = req.userId;
  //   // 위 데이터를 제품 db에 추가하기
  //   const newOrder = await orderService.createOrder({
  //     userId,
  //     summaryTitle,
  //     totalPrice,
  //     address,
  //     request,
  //   });

  //   res.status(201).json({_id:newOrder});
  // },
  async createOrder(req, res) {
    // req 에서 데이터 가져오기
    const { userId, products, address, request } = req.body;
   // products 배열의 요소들을 이용하여 상품 정보 조회
   const productDetails = await Promise.all(
    products.map(async (product) => {
      const { productId, quantity } = product;
      const productDetail = await product.findById(productId);
      return { product: productDetail, quantity };
    })
  );

  // 상품 정보와 주문 정보를 이용하여 새로운 주문 생성
  const totalPrice = productDetails.reduce(
    (acc, product) => acc + product.product.price * product.quantity,
    0
  );
  const summaryTitle = `${productDetails.length}개의 상품`;
  const order = new Order({
    userId,
    products: productDetails,
    summaryTitle,
    totalPrice,
    address,
    request,
    status: "ordered",
  });
  const savedOrder = await order.save();

  res.json(savedOrder);
}, catch (err) {
  console.error(err);
  res.status(500).json({ error: "서버 오류" });
},
  
  async getOrderAll(req, res, next) {
    const userId = req.userId;
    try {
      const orders = await orderService.getOrdersByUserId(userId);
      res.status(200).json({
        success: true,
        data: orders
      });
    } catch (error) {
      next(error);
    }
  },
  async getOrderOne(req, res, next) {
    try {
      const orderId = req.params.orderId;
      const orderData = await orderService.getOrderById(orderId);

      res.status(200).json(orderData);
    } catch (error) {
      next(error);
    }
  },
  async updateOrder(req, res, next) {
    try {
      // req (request) 에서 데이터 가져오기
      const orderId = req.params.orderId;
      const { address, request, status } = req.body;

      // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
      // 보내주었다면, 업데이트용 객체에 삽입함.
      const toUpdate = {};

      if (address) toUpdate.address = address;
      if (request) toUpdate.request = request;
      if (status) toUpdate.status = status;

      // 제품 정보를 업데이트함.
      const updatedOrder = await orderService.setOrder(orderId, toUpdate);

      res.status(200).json(updatedOrder);
    } catch (error) {
      next(error);
    }
  },
  async deleteOrder(req, res, next) {
    try {
      const orderId = req.params.orderId;
      const deletedCount = await orderService.deleteOrder(orderId);

      res.status(200).json(deletedCount);
    } catch (error) {
      next(error);
    }

  },
  async getAdminAllOrders(req, res, next) {
    try {
      // 관리자 권한을 가진 사용자만 주문 내역 전체를 조회할 수 있도록 제한
      if (!req.isAdmin) {
        res.status(403).json({ message: "관리자만 접근 가능합니다." });
        return;
      }
  
      // 모든 주문 내역을 조회하여 반환
      const orders = await orderService.getAdminAllOrders();
  
      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
  

}

