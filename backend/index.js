const express = require("express");
const cors = require("cors");
const { Product } = require("./models/Product");
const Cart = require("./models/Cart");
const { Order } = require("./models/Order");
const app = express();
require("./db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
  res.send("<h1>The server is up and running!</h1>")
})

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

app.post("/orders", async (req, res) => {
  const { customerInfo, products } = req.body;
  const order = new Order({
    customer: customerInfo,
    products,
  });

  try {
    await order.save();
    return res.sendStatus(200);
  } catch (expection) {
    console.log(expection.message);
    throw res.sendStatus(500);
  }
});

const port = process.env.PORT || 8080

app.listen(port, (err, res) => {
  if (err) {
      console.log(err)
      return res.status(500).send(err.message)
  } else {
      console.log('[INFO] Server Running on port:', port)
  }
});