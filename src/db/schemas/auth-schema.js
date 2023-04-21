import mongoose from "mongoose";
import bcrypt from "bcrypt";

const AuthSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    validate: /^[a-z0-9_]+$/i,
},
  password: { 
    type: String, 
    required: true,
    validate: /^[a-z0-9_]+$/i,
},
});

// 비밀번호 확인
AuthSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

const Auth = mongoose.model("Auth", AuthSchema);

export { Auth };