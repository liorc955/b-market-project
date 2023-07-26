const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
require('dotenv').config();

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    state: String,
    zipCode: Number
});

userSchema.plugin(encrypt, {
  secret: process.env.SECRET,
  encryptedFields: ["password"],
});

const User =
  mongoose.models.user || mongoose.model("user", userSchema);

module.exports = { User, userSchema };
