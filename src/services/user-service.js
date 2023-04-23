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
    throw new Error("정보 수정에 실패했습니다.");
  }
  return updatedUser;
};

const deleteUser = async (userId) => {
  const userModel = new UserModel();
  const deletedUser = await userModel.delete(userId);
  if (!deletedUser) {
    throw new Error("회원 탈퇴에 실패했습니다.");
  }
};

export const userService = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
