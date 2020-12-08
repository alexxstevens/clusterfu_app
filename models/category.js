const mongoose = require("mongoose");
const validator = require("validator");

const Category = mongoose.model("Category", {
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#000000",
    trim: true,
  },
});

module.exports = Category;
