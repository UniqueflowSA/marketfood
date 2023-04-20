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
  sellerId:{
    type:Schema.Types.ObjectId,
    ref:'user',
    required: true,
  },
  // 업로드한 날짜... 필요한가..?
  //
});


const Product = mongoose.model("Product", productSchema);

export { Product };