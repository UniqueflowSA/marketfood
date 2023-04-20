
import { userService } from "../services/user-service";

const createUser = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const createdUser = await userService.createUser(userInfo);

    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const foundUser = await userService.getUser(userId);

    res.status(200).json(foundUser);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const updatedInfo = req.body;
    const updatedUser = await userService.updateUser(userId, updatedInfo);

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    await userService.deleteUser(userId);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export { createUser, getUser, updateUser, deleteUser };
