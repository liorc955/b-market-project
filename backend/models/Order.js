const mongoose = require("mongoose");
const { customerSchema } = require("./Customer");
const { productSchema } = require("./Product");

const orderSchema = mongoose.Schema({
  customer: {
    type: customerSchema,
  },
  products: {
    type: [productSchema],
  },
});

const Order = mongoose.models.order || mongoose.model("order", orderSchema);

module.exports = { Order, orderSchema };
