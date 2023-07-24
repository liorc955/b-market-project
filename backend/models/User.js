const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
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
