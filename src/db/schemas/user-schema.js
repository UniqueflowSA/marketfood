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

UserSchema.pre('save', async function (next) {
  // 사용자가 계정을 만들 때 입력한 비밀번호를 해시화하여 저장
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.comparePassword = async function (password) {
  // 사용자가 입력한 비밀번호를 데이터베이스에 저장된 해시화된 비밀번호와 비교한다.
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

export { User };
