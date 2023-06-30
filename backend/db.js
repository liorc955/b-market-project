const mongoose = require("mongoose");
require("dotenv").config();

try {
  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
} catch (expection) {
    console.log("could not connect");
    console.log(expection.message);
}

const dbConnection = mongoose.connection;

dbConnection.on("error", (err) => console.log(`MongoDB connection error. ${err}`));
dbConnection.once("open", () => console.log("MongoDB connected successfully"));

module.exports = dbConnection;

