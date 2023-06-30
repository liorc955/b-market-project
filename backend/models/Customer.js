const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  city: String,
  firstName: String,
  lastName: String,
  state: String,
  zip: Number,
});

const Customer =
  mongoose.models.customer || mongoose.model("customer", customerSchema);

module.exports = { Customer, customerSchema };
