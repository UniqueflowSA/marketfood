import UserModel from "../db/models/user-model.js";

export const userService = {
  async createUser(userInfo) {
    const userModel = new UserModel();
    const createdUser = await userModel.create(userInfo);
    return createdUser;
  },

  async getUser(userId) {
    const userModel = new UserModel();
    const foundUser = await userModel.findOne(userId);
    return foundUser;
  },

  async updateUser(userId, updatedInfo) {
    const userModel = new UserModel();
    const allowedUpdates = ['email','password', 'address', 'phone'];
    const updates = {};

    for (const key in updatedInfo) {
      if (allowedUpdates.includes(key)) {
        updates[key] = updatedInfo[key];
      }
    }

    const updatedUser = await userModel.update(userId, updates);

    if (!updatedUser) {
      throw new Error("정보 수정에 실패했습니다.");
    }

    return updatedUser;
  },

  async deleteUser(userId) {
    const userModel = new UserModel();
    const deletedUser = await userModel.deleteOne({ userId });
    return deletedUser
  },
  async getAllUsers() {
    const userModel = new UserModel();
    const allUsers = await userModel.find({});
    return allUsers;
  },
  async setAdmin(userId) {
    try {
      const updatedUser = await UserModel.setAdmin(userId);
      return updatedUser;
    } catch (error) {
      throw new Error(`Failed to set admin role for user ${userId}: ${error}`);
    }
  },
  async setUser(userId) {
    try {
      const updatedUser = await UserModel.setUser(userId);
      return updatedUser;
    } catch (error) {
      throw new Error(`Failed to set user role for user ${userId}: ${error}`);
    }
  },

};

