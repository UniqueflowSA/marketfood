import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema.js';

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
    const newUser = new User(userInfo);
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
