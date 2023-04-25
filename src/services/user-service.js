import UserModel from "../db/models/user-model.js";


const createUser = async (userInfo) => {
const userModel = new UserModel();
const createdUser = await userModel.create(userInfo);

return createdUser;
};

const getUser = async (userId) => {
const userModel = new UserModel();
const foundUser = await userModel.findOne(userId);

return foundUser;
};

const updateUser = async (userId, updatedInfo) => {
const userModel = new UserModel();
const allowedUpdates = ['email','password', 'address', 'phone']; // 변경 가능한 프로퍼티
const updates = {};

for (const key in updatedInfo) {
  if (allowedUpdates.includes(key)) {
    updates[key] = updatedInfo[key];
  }
}

const updatedUser = await userModel.update(userId, updatedInfo);
if (!updatedUser) {
throw new Error("정보 수정에 실패했습니다.");
}
return updatedUser;
};

const deleteUser = async (userId) => {
  const userModel = new UserModel();
  const deletedUser = await userModel.deleteOne({ userId });
  return deletedUser
};

export const userService = {
createUser,
getUser,
updateUser,
deleteUser,
};
