import { nationModel } from '../db/models/nation-model.js';

class NationService{
  async createNation(nationInfo){
    const createNation = await nationModel.create(nationInfo);
    return createNation;
  }
  async getNationList(){
    const getNations = await nationModel.findAll();
    return getNations;
  }
  async getNationById(nationId) {
    const nation = await nationModel.findById(nationId);
    return nation;
  }
  async updateNation(nationId, toUpdate){
    const updatedNation = await nationModel.update(nationId, toUpdate);
    return updatedNation;
  }
  async deleteNation(nationId) {
    await nationModel.delete(nationId);
  }
}
const nationService = new NationService();

export { nationService };
