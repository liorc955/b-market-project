const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  productId: String,
  title: String,
  description: String,
  price: Number,
  image: String,
  quantity: Number,
});

const Cart = mongoose.models.cart || mongoose.model("cart", cartSchema);

module.exports = Cart;
