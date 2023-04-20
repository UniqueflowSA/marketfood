import db from "../models";

const createUser = async (userInfo) => {
  const createdUser = await db.User.create(userInfo);
  return createdUser;
};

const getUser = async (userId) => {
  const foundUser = await db.User.findByPk(userId);
  return foundUser;
};

const updateUser = async (userId, updatedInfo) => {
  const [numRowsUpdated, [updatedUser]] = await db.User.update(
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
  const numRowsDeleted = await db.User.destroy({
    where: { id: userId },
  });
  if (numRowsDeleted !== 1) {
    throw new Error("Failed to delete user.");
  }
};

export default { createUser, getUser, updateUser, deleteUser };
