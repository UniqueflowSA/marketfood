import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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
  age: {
    type: Number,
    required: true,
  },
});

export { User };
