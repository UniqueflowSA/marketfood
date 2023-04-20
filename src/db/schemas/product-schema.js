import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
  product-id:{//상품
    type:String || Number,
    required:true,
  },
  product:{//상품명
    type:String || Number,
  },
  product-option:{//추가옵션
    type:String || Number,
  }
});

// 비밀번호 확인
AuthSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

const Auth = mongoose.model("Auth", AuthSchema);

export { Auth };