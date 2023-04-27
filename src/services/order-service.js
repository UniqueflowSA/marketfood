import OrderModel from "../db/models/order-model.js";

export const orderService = {
  async createOrder(orderInfo) {
    const orderModel = new OrderModel();
    const createdOrder = await orderModel.create(orderInfo)
    return createdOrder;
  },

  async getOrdersByUserId(userId) {
    const orderModel = new OrderModel();
    const orders = await orderModel.findAllByUserId(userId);
    return orders;
  },

  async getOrderOne(orderId) {
    const orderModel = new OrderModel();
    const order = await orderModel.findById(orderId);

    if (!order) {
      throw new Error("해당 id의 주문은 없습니다. 다시 한 번 확인해 주세요.");
    }

    return order;
  },

  async updateOrder(orderId, toUpdate) {
    const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, toUpdate, {
      new: true,
    });

    return updatedOrder;
  },

  async deleteOrder(orderId) {
    const { deletedCount } = await OrderModel.deleteOne({ _id: orderId });
    return deletedCount;
  },
  async getAdminAllOrders() {
    const orders = await OrderModel.find();
    return orders;
  }
  
}
