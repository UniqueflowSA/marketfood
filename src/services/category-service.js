import { categoryModel } from "../db/models/category-model.js";

class CategoryService {
  async createCategory(categoryInfo) {
    const name = categoryInfo; 
    const createdNewCategory = await categoryModel.create(categoryInfo);
    return createdNewCategory;
  }

  async getCategoryById(categoryId) {
    const category = await categoryModel.findById(categoryId);
    return category;
  }

  async getCategoryByName(name) {
    const category = await categoryModel.findByName(name);
    return category;
  }

  async getCategoryList() {
    const categoryList = await categoryModel.findAll();
    return categoryList;
  }

  async updateCategory(cid, toUpdate) {
    const updatedcategory = await categoryModel.update(cid, toUpdate);
    return updatedcategory;
  }

  async deleteCategory(cid) {
    await categoryModel.delete(cid);
  }
}

const categoryService = new CategoryService();

export { categoryService };
