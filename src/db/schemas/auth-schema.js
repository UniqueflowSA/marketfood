import mongoose from "mongoose";
import bcrypt from "bcrypt";

const AuthSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
      },
  password: { 
    type: String, 
    required: true,
},
});

// 비밀번호 확인
AuthSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

const Auth = mongoose.model("Auth", AuthSchema);

export { Auth };