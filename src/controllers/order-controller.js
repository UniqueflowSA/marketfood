import { orderService } from "../services/order-service.js";

export default {
  async createOrder(req, res, next) {
    // req (request) 에서 데이터 가져오기
    const userId = req.currentUserId; //사용자명
    const summaryTitle = req.body.summaryTitle; //주문 식별자
    const totalPrice = req.body.totalPrice; //주문 총가격
    const address = req.body.address; // 배송지 주소
    const request = req.body.request; //배송시 요청사항

    // 위 데이터를 제품 db에 추가하기
    const newOrder = await orderService.addOrder({
      userId,
      summaryTitle,
      totalPrice,
      address,
      request,
    });

    res.status(201).json({_id:newOrder});
  },
  async getOrderAll(req, res, next) {
    try {
      const userId = req.currentUserId;

      const orders = await orderService.getOrdersByUserId(userId);

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }

  },
  async getOrderOne(req, res, next) {
    try {
      const orderId = req.params.orderId;
      const orderData = await orderService.getOrderData(orderId);

      res.status(200).json(orderData);
    } catch (error) {
      next(error);
    }
  },
  async updateOrder(req, res, next) {
    try {
      // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
      if (is.emptyObject(req.body)) {
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        );
      }

      // req (request) 에서 데이터 가져오기
      const orderId = req.params.orderId;
      const address = req.body.address;
      const request = req.body.request;
      const status = req.body.status;

      // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
      // 보내주었다면, 업데이트용 객체에 삽입함.
      const toUpdate = {
        ...(address && { address }),
        ...(request && { request }),
        ...(status && { status }),
      };

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
      const deleteResult = await orderService.deleteOrderData(orderId);

      res.status(200).json(deleteResult);
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

