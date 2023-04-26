import mongoose from "mongoose";

const { Schema } = mongoose;

const NationSchema = new Schema(
  {
    nation: {
      type: String,
      required: true,
    },
  },
  {
    collection: "nations",
    timestamps: true,
  }
);


export { NationSchema };
