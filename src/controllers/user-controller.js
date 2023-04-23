import { userService } from '../services/user-service.js';

export default {
  async createUser(req, res, next) {
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
  },

  async getUser(req, res, next) {
    try {
      const userId = req.params.userId;
      const foundUser = await userService.getUser(userId);
      res.status(200).json(foundUser);
    } catch (error) {
      next(error);
    }
  },

  async updateUser(req, res, next) {
    try {
      const userId = req.params.userId;
      const updatedUser = await userService.updateUser(userId, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  },

  async deleteUser(req, res, next) {
    try {
      const userId = req.params.userId;
      await userService.deleteUser(userId);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
};
