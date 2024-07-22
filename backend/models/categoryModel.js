import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    maxLength: 32,
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
