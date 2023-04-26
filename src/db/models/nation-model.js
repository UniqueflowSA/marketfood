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
}

const nationModel = new NationModel();

export { nationModel };
