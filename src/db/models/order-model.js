import { model } from 'mongoose';
import { OrderSchema } from '../schemas/order-schema.js';

const Order = model('Order', OrderSchema);

export default class OrderModel {
async createOrder(userId, orderInfo) {
const newOrder = new Order({ userId, ...orderInfo });
await newOrder.save();
return newOrder;
}

async getOrdersByUserId(userId) {
const orders = await Order.find({ userId });
return orders;
}

async getOrderById(orderId) {
const order = await Order.findById(orderId);
return order;
}

async updateOrder(orderId, update) {
const filter = { _id: orderId };
const option = { new: true };
const updatedOrder = await Order.findOneAndUpdate(filter, update, option);
return updatedOrder;
}

async deleteOrder(orderId) {
const deletedOrder = await Order.deleteOne({ _id: orderId });
return deletedOrder;
}
}