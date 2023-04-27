import { Schema } from "mongoose";

const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "수량은 최소 1개 이상이어야 합니다."],
      },
    },
  ],
  summaryTitle: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: [0, "가격은 0원 이상이어야 합니다."],
  },
  address: {
    type: String,
    required: true,
  },
  request: {
    type: String,
    required: false,
    default: "",
  },
  status: {
    type: String,
    required: true,
    enum: ["ordered", "shipped", "delivered"],
    default: "ordered",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export {OrderSchema}
