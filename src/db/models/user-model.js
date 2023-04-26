import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema.js';
import bcrypt from 'bcrypt';

const User = model('User', UserSchema);

export default class UserModel {
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async findOne(userId) {
    const user = await User.findOne({ userId });
    return user
  }
  async find() {
    const users = await User.find();
    return users;
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
  async findUserById(userId) {
    const user = await User.findById(userId);
    return user;
    }
  async update(userId, update) {
      const filter = { userId: userId };
      const option = { new: true };
      const updatedUser = await User.findOneAndUpdate(filter, update, option);
      return updatedUser;
      }
      
  async deleteOne(userId) {
        const deletedUser = await User.deleteOne(userId);
       
        return deletedUser;
      }
      
      }