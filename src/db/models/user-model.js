import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema.js';
import bcrypt from 'bcrypt';

const User = model('User', UserSchema);

export default class UserModel {
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async findById(id) {
    const user = await User.findById(id);
    return user;
  }

  async create(userInfo) {
    const { password, ...rest } = userInfo;

  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,20}$/;
  if (!passwordRegex.test(password)) {
    throw new Error('Password should be 8-20 characters long and include at least one digit, one special character, and one alphabet character.');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ password: hashedPassword, ...rest });
  await newUser.save();
  return newUser;
  }

  async update(id, update) {
    const updatedUser = await User.findByIdAndUpdate(id, update, {
      new: true,
    });
    return updatedUser;
  }

  async delete(id) {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  }
}
