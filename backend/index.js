const express = require("express");
const cors = require("cors");
const { Product } = require("./models/Product");
const { Order } = require("./models/Order");
const { User } = require("./models/User");
const app = express();
require("./db");
const jwt = require("jsonwebtoken");
const redisClient = require("./redis");

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

const routeSource = "/api";

app.get(`${routeSource}/products`, chace, async (req, res) => {
  try {
    const data = await Product.find();
    redisClient.setEx(req.path, 3600, JSON.stringify(data));
    return res.status(200).json(data);
  } catch (expection) {
    console.log(expection.message);
    throw res.status(500);
  }
});

app.get(`${routeSource}/products/:id`, async (req, res) => {
  try {
    const data = await Product.findById(req.params.id, { _id: 0 });
    return res.status(200).json(data);
  } catch (expection) {
    console.log(expection.message);
    throw res.status(500);
  }
});

app
  .route(`${routeSource}/users/orders`)
  .get(authenticationJwt, async (req, res) => {
    try {
      data = await Order.find();
      res.status(200).send(data);
    } catch (expection) {
      console.log(expection);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    const {
      userId,
      products,
      userAddress,
      timeStamp,
      quantity,
      productId,
      totalAmount,
    } = req.body;

    const order = new Order({
      userId,
      products,
      userAddress,
      timeStamp,
      quantity,
      productId,
      totalAmount,
    });

    try {
      await order.save();
      return res.sendStatus(201);
    } catch (expection) {
      console.log(expection.message);
      throw res.sendStatus(500);
    }
  });

app.get(
  `${routeSource}/users/user/orders`,
  authenticationJwt,
  async (req, res) => {
    const user = req.user;
    try {
      const data = await Order.find({ userId: user.id });
      res.status(200).send(data);
    } catch (expection) {
      console.log(expection);
      res.sendStatus(500);
    }
  }
);

app
  .route(`${routeSource}/users/user`)
  .get(authenticationJwt, async (req, res) => {
    const user = req.user;
    const exludedFields = {
      username: 0,
      _ct: 0,
      _ac: 0,
      __v: 0,
    };
    try {
      const data = await User.findById(user.id).select(exludedFields);
      return res.status(200).send(data);
    } catch (expection) {
      console.log(expection);
      res.status(500).send({ errorMsg: "Something went wrong!" });
    }
  })
  .put(authenticationJwt, async (req, res) => {
    const user = req.user;
    try {
      await User.findByIdAndUpdate(user.id, {
        $set: { ...req.body },
      });

      return res.status(201).send({});
    } catch (expection) {
      console.log(expection);
      res.status(500).send({ errorMsg: "Something went wrong!" });
    }
  });

app.get(`${routeSource}/users`, authenticationJwt, async (req, res) => {
  const exludedFields = {
    username: 0,
    _ct: 0,
    _ac: 0,
    __v: 0,
  };
  try {
    const data = await User.find().select(exludedFields);
    return res.status(200).send(data);
  } catch (expection) {
    console.log(expection);
    res.status(500).send({ errorMsg: "Something went wrong!" });
  }
});

function authenticationJwt(req, res, next) {
  const authHeader = req.headers.cookie;
  const token = authHeader && authHeader.split("=")[1];
  if (token === undefined)
    return res.status(401).send({ errorMsg: "No token provided" });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return res.status(403).send({ errorMsg: "Access denied" });
    req.user = user;
    next();
  });
}

async function chace(req, res, next) {
  try {
    const data = await redisClient.get(req.path);
    if (data !== null) return res.status(200).send(await JSON.parse(data));
    next();
  } catch (expection) {
    console.log(expection);
    next();
  }
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
