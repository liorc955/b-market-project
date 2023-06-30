const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

const Product =
  mongoose.models.product || mongoose.model("product", productSchema);

module.exports = { Product, productSchema };
