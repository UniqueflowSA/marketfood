import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    collection: "categories",
    timestamps: true,
  }
);


export { CategorySchema };
