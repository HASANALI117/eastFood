const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
