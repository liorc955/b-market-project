const express = require("express");
const app = express();
const cors = require("cors");
var jwt = require("jsonwebtoken");
require("dotenv").config();
require("./db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { User } = require("./models/User");

app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const errorMsg = "Incorrect username or password";
  User.findOne({ username: username }).then(function (foundUser, error) {
    if (!error) {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function (err, result) {
          if (result) {
            const user = {
              username: foundUser.username,
              id: foundUser._id,
            };
            res.status(200).send({ accessToken: generateAccessToken(user) });
          } else res.status(401).send({ errorMsg });
        });
      } else {
        res.status(401).send({ errorMsg });
      }
    } else {
      console.log(error);
    }
  });
});

app.post("/register", (req, res) => {
  const user = req.body;
  bcrypt.hash(user.password, saltRounds, function (err, passwordHas) {
    if (err) console.log(err);
    const newUser = new User({
      username: user.username,
      password: passwordHas,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      city: user.city,
      state: user.state,
      zipCode: user.zipCode,
    });
    newUser.save().then(function (result, err) {
      if (err) {
        res.status(400).send({ errorMsg: "Registration failed" });
        console.log(err);
      } else {
        res.sendStatus(201);
      }
    });
  });
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

const port = process.env.PORT || 5000;

app.listen(port, (err, res) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log("[INFO] Server Running on port:", port);
  }
});
