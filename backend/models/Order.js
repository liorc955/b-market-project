const mongoose = require("mongoose");
const { productSchema } = require("./Product");

const orderSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  timeStamp: String,
  userAddress: {
    city: String,
    street: String,
    state: String,
    zipCode: String,
  },
  products: {
    type: [productSchema],
  },
  totalAmount: Number,
});

const Order = mongoose.models.order || mongoose.model("order", orderSchema);

module.exports = { Order, orderSchema };
