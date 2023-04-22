import mongoose from "mongoose";

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

export const Auth = mongoose.model("Auth", AuthSchema,'users'); //users에 있는 사용자 db 참조.