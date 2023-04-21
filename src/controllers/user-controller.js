import { userService } from '../services/user-service.js';

const createUser = async (req, res, next) => {
  try {
    const { userId, name, email, password, phone, address } = req.body;
    const userInfo = { userId, name, email, password,phone,address: {
      postalCode: req.body.postalCode,
      address1: req.body.address1,
      address2: req.body.address2,
    },};
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
    const { address: { postalCode, address1, address2 }, ...userWithoutAddress } = foundUser.toObject();
    const user = { ...userWithoutAddress, postalCode, address1, address2 };
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { postalCode, address1, address2, ...updatedInfoWithoutAddress } = req.body;
    const updatedInfo = { ...updatedInfoWithoutAddress, address: { postalCode, address1, address2 } };
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
