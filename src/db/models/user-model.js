import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema';

const User = model('User', UserSchema);

class UserModel {
async findByEmail(email) {
const user = await User.findOne({ email });
return user;
}

async findById(id) {
const user = await User.findById(id);
return user;
}

async create(userInfo) {
const newUser = await User.create(userInfo);
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

export const userModel = new UserModel();
