import UserModel from "../db/models/user-model.js";

const createUser = async (userInfo) => {
  const userModel = new UserModel();
  const createdUser = await userModel.create(userInfo);
  return createdUser;
};

const getUser = async (userId) => {
  const userModel = new UserModel();
  const foundUser = await userModel.findById(userId);
  return foundUser;
};

const updateUser = async (userId, updatedInfo) => {
  const userModel = new UserModel();
  const updatedUser = await userModel.update(userId, updatedInfo);
  if (!updatedUser) {
    throw new Error("Failed to update user.");
  }
  return updatedUser;
};

const deleteUser = async (userId) => {
  const userModel = new UserModel();
  const deletedUser = await userModel.delete(userId);
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
