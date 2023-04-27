import { nationModel } from '../db/models/nation-model.js';

class NationService{
  async createNation(nationInfo){
    const createNation = await nationModel.create(nationInfo);
    return createNation;
  }
}
const nationService = new NationService();

export { nationService };
