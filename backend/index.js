const express = require("express");
const cors = require("cors");
const { Product } = require("./models/Product");
const Cart = require("./models/Cart");
const { Order } = require("./models/Order");
const { User } = require("./models/User");
const app = express();
require("./db");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>The server is up and running!</h1>");
});

app.get("/products", async (req, res) => {
  try {
    const data = await Product.find();
    return res.status(200).json(data);
  } catch (expection) {
    console.log(expection.message);
    throw res.status(500);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const data = await Product.findById(req.params.id, { _id: 0 });
    return res.status(200).json(data);
  } catch (expection) {
    console.log(expection.message);
    throw res.status(500);
  }
});

app.put("/cartitems", async (req, res) => {
  const cartItems = req.body;
  try {
    await Cart.deleteMany({});
    await Cart.insertMany(cartItems);
    return res.sendStatus(201);
  } catch (expection) {
    console.log(expection.message);
    throw res.sendStatus(500);
  }
});

app.get("/cartitems", async (req, res) => {
  try {
    const data = await Cart.find({}, { _id: 0 });
    return res.status(200).json(data);
  } catch (expection) {
    console.log(expection.message);
    throw res.status(500);
  }
});

app
  .route("/orders")
  .post(async (req, res) => {
    const { userId, products, userAddress, timeStamp } = req.body;
    const order = new Order({
      userId: userId,
      products,
      userAddress,
      timeStamp
    });

    try {
      await order.save();
      return res.sendStatus(200);
    } catch (expection) {
      console.log(expection.message);
      throw res.sendStatus(500);
    }
  })
  .get(authenticationJwt , async (req, res) => {
    const user = req.user;
    let data = {};
    try {
      if (user) {
        data = await Order.find({userId: user.id});
      } else {
        data = await Order.find();
      }
      res.status(200).send(data);
    } catch (expection) {
      console.log(expection);
      res.sendStatus(500);
    }
  });

app.get("/users", authenticationJwt, async (req, res) => {
  const user = req.user;
  const exludedFields = {
    username: 0,
    _ct: 0,
    _ac: 0,
    __v: 0,
  };
  try {
    let data = {};
    if (user) {
      data = await User.findById(user.id).select(exludedFields);
    } else {
      data = await User.find().select(exludedFields);
    }
    return res.status(200).send(data);
  } catch (expection) {
    console.log(expection);
    res.status(500).send({ errorMsg: "Something went wrong!" });
  }
});

function authenticationJwt(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === undefined) {
    req.user = 0;
    next();
    return null;
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return res.status(403).send({ errorMsg: "Unauthorized!" });
    req.user = user;
    next();
  });
}

const port = process.env.PORT || 8080;

app.listen(port, (err, res) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log("[INFO] Server Running on port:", port);
  }
});
