import  OrderModel  from "../db/models/order-model.js";

export const orderService = {
    async addOrder(orderData) {
        const newOrder = new OrderModel(orderData);
        await newOrder.save();
        return newOrder._id; // 생성된 주문 ID 반환
      },
    
      async getOrders() {
        const orders = await this.orderModel.findAll();
    
        return orders;
      },
    
      async getOrdersByUserId(userId) {
        const orders = await this.orderModel.findAllByUserId(userId);
    
        return orders;
      },
    
      async setOrder(orderId, toUpdate) {
        const updatedOrder = await this.orderModel.update({
          orderId,
          update: toUpdate,
        });
    
        return updatedOrder;
      },
    
      async getOrderData(orderId) {
        const order = await this.orderModel.findById(orderId);
    
        // db에서 찾지 못한 경우, 에러 메시지 반환
        if (!order) {
          throw new Error("해당 id의 주문은 없습니다. 다시 한 번 확인해 주세요.");
        }
    
        return order;
      },
    
      async deleteOrderData(orderId) {
        const { deletedCount } = await this.orderModel.deleteById(orderId);
    
        // 삭제에 실패한 경우, 에러 메시지 반환
        if (deletedCount === 0) {
          throw new Error(`${orderId} 주문의 삭제에 실패하였습니다`);
        }
    
        return { result: "success" };
      },
      async getAdminAllOrders() {
        try {
          const orders = await Order.find({})
            .populate("userId", "name")
            .sort("-createdAt");
    
          return orders;
        } catch (error) {
          throw new Error("전체 주문 조회에 실패했습니다.");
        }
      }
    
};
