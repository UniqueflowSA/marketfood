import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
 
  userId: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 12,
    validate: /^[a-z0-9_]+$/i,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 20,
    match: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,20}$/,
  },
  name: {
    type: String,
    required: true,
  },
  phone:{
    type:String,
    required:true,
  },
  address: {
    type: new Schema(
      {
        postalCode: String,//우편번호
        address1: String,//주소
        address2: String,//상세주소
      },
      {
        _id: false,
      }
    ),
    required: true,
  },

  
});

export { UserSchema };
