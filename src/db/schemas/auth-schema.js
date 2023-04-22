import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
  hash: { type: String, required: true },
});

const AuthSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
      },
  password: passwordSchema,
});

export const Auth = mongoose.model("Auth", AuthSchema,'users'); //users에 있는 사용자 db 참조.