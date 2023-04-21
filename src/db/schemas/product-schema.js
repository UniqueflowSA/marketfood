import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  productId:{//상품 / 상품 아이디 자동으로 increase?
    type:String,
    required:true,
  },
  product:{//상품명
    type:String,
    required: true,
  },
  productOption:{//추가옵션
    type:String,
    required: true,
  },
  price:{//가격
    type:Number,
    required: true,
  },
  sellerId:{ // 판매자 아이디
    type:Schema.Types.ObjectId,
    ref:'user',
    required: true,
  },
  categoryId: {//카테고리
    type: Schema.Types.ObjectId,
    ref: "categorys",
    required: true,
  },
  manufacturer: { // 제조사
    type: String,
    required: true,
  },
  shortDescription: {// 짧은 설명
    type: String,
    required: true,
  },
  detailDescription: { // 상세 설명
    type: String,
    required: true,
  },
  imageKey: { // 이미지
    type: String,
    required: true,
  },
  inventory: {// 재고량
    type: Number,
    min: 0,
    default: 10,
    required: true,
  },{
    collection: "product",
    timestamps: true,
  }
});


const Product = mongoose.model("Product", ProductSchema);

export { Product };