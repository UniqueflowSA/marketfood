import { nationService } from "../services/nation-service.js";

class NationController{
  async createNation(req, res, next) {
    try {
      const nation = req.body;
      const createdNewNation = await nationService.createNation(nation);
      return res.status(200).json(createdNewNation);
    } catch (error) {
      next(error);
    }
  }
}

const nationController = new NationController();
export { nationController };
