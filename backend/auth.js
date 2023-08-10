const express = require("express");
const app = express();
const cors = require("cors");
var jwt = require("jsonwebtoken");
require("dotenv").config();
require("./db");
const bcrypt = require("bcrypt");
const { User } = require("./models/User");

const corsOptions = {
  origin: true,
  credentials: true,
};

const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
};

app.use(express.json());
app.use(cors(corsOptions));

const routeSource = "/auth";

app.post(`${routeSource}/login`, (req, res) => {
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
            const token = generateAccessToken(user);
            const expiredNumberTime = 3600000;
            res
              .status(200)
              .cookie("accessToken", token, {
                ...cookieOptions,
                maxAge: expiredNumberTime,
              })
              .send({});
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

app.post(`${routeSource}/register`, (req, res) => {
  const user = req.body;
  bcrypt.hash(
    user.password,
    parseInt(process.env.SALT_ROUNDS),
    function (err, passwordHas) {
      if (err)
        res
          .status(500)
          .send({ errorMsg: "Registration failed, please try again." });
      const newUser = new User({
        username: user.username,
        password: passwordHas,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: {
          street: user.street,
          city: user.city,
          state: user.state,
          zipCode: user.zipCode,
        },
      });
      newUser
        .save()
        .then((data) => {
          res.status(201).send({ _id: data._id });
        })
        .catch((error) => {
          if (error.code === 11000) {
            res.status(400).send({ errorMsg: "Username already exists!" });
          } else {
            console.error("Error:", error.message);
            res.status(500).send({ errorMsg: "Something went wrong!" });
          }
        });
    }
  );
});

app.get(`${routeSource}/logout`, (req, res) => {
  res.clearCookie("accessToken", cookieOptions);
  res.sendStatus(200);
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
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
