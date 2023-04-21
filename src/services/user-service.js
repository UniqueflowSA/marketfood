import UserModel from "../db/models/user-model.js";

const createUser = async (userInfo) => {
  const createdUser = await UserModel.create(userInfo);
  return createdUser;
};

const getUser = async (userId) => {
  const foundUser = await UserModel.findById(userId);
  return foundUser;
};

const updateUser = async (userId, updatedInfo) => {
  const updatedUser = await UserModel.update(userId, updatedInfo);
  if (updatedUser.nModified === 0) {
    throw new Error("Failed to update user.");
  }
  return updatedUser;
};

const deleteUser = async (userId) => {
  const deletedUser = await UserModel.delete(userId);
  if (!deletedUser) {
    throw new Error("Failed to delete user.");
  }
};

export const userService = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
