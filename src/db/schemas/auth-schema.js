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

const Auth = mongoose.model("Auth", AuthSchema);

export { Auth };