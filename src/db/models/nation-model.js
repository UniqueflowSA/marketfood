import { model } from "mongoose";
import { NationSchema } from "../schemas/nation-schema.js";

const Nation = model("Nation", NationSchema);

class NationModel {
  async create(category) {
    try {
      const createdNewNation = await Nation.create(category);
      return createdNewNation;
    } catch (err) {
      const error = new Error("새 카테고리 생성에 실패하였습니다.");
      error.statusCode = 400;
      throw error;
    }
  }
  async findAll() {
    try {
      const nationList = await Nation.find({});
      return nationList;
    } catch (err) {
      const error = new Error(
        "카레고리 전체리스트를 불러오는데에 실패하였습니다."
      );
      error.statusCode = 400;
      throw error;
    }
  }
  async findById(nationId) {
    const nation = await Nation.findOne({ _id: nationId });
    return nation;
  }
  async update(nationId, toUpdate){
    const filter = { _id : nationId };
    const option = { returnOriginal : true };
    try{
      const updatedNation = await Nation.findOneAndUpdate(filter, toUpdate,option);
      return updatedNation;
    }catch(err) { 
      const error = new Error("국가 수정에 실패하였습니다.");
      error.statusCode = 400;
      throw error;
    }
  }
  async delete(nationId) {
    try {
      await Nation.deleteOne({ _id: nationId });
    } catch (err) {
      const error = new Error("국가 삭제에 실패하였습니다.");
      error.statusCode = 400;
      throw error;
    }
  }

}

const nationModel = new NationModel();

export { nationModel };
