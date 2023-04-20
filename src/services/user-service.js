import userModel from "../db";

const createUser = async (userInfo) => {
  const createdUser = await userModel.User.create(userInfo);
  return createdUser;
};

const getUser = async (userId) => {
  const foundUser = await userModel.User.findByPk(userId);
  return foundUser;
};

const updateUser = async (userId, updatedInfo) => {
  const [numRowsUpdated, [updatedUser]] = await userModel.User.update(
    updatedInfo,
    {
      returning: true,
      where: { id: userId },
    }
  );
  if (numRowsUpdated !== 1) {
    throw new Error("Failed to update user.");
  }
  return updatedUser;
};

const deleteUser = async (userId) => {
  const numRowsDeleted = await userModel.User.destroy({
    where: { id: userId },
  });
  if (numRowsDeleted !== 1) {
    throw new Error("Failed to delete user.");
  }
};

export const userService = {
  createUser,
  getUser,
  updateUser,
  deleteUser
};
