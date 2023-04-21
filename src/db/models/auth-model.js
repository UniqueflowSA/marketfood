import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const AuthSchema = new Schema({
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

AuthSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

const AuthModel = mongoose.model("Auth", AuthSchema);

export default AuthModel;
