const express = require("express");
const User = require("../models/User");
const Order = require("../models/Orders");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
// const axios = require('axios');
const fetch = require("../middleware/fetchdetails");
const jwtSecret = "HaHa";

// Get logged in User details, Login Required.
router.post("/getuser", fetch, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password"); // -password will not pick password from db.
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

router.post("/myOrderData", async (req, res) => {
  try {
    console.log(req.body.email);
    let eId = await Order.findOne({ email: req.body.email });
    res.json({ orderData: eId });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
  if (!data) {
    return res.status(400).send("Missing order_data in the request body");
  }

  if (!Array.isArray(data)) {
    data = [data];
  }

  data.unshift({ Order_date: req.body.order_date });
  console.log("1231242343242354", req.body.email);

  //if email not exisitng in db then create: else: InsertMany()
  let eId = await Order.findOne({ email: req.body.email });
  console.log(eId);
  if (eId === null) {
    try {
      console.log(data);
      console.log("1231242343242354", req.body.email);
      await Order.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.send("Server Error", error.message);
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } },
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.send("Server Error", error.message);
    }
  }
});
//
// router.post("/myOrderData", async (req, res) => {
//   try {
//     console.log(req.body.email);
//     let eId = await Order.findOne({ email: req.body.email });
//     //console.log(eId)
//     res.json({ orderData: eId });
//   } catch (error) {
//     res.send("Error", error.message);
//   }
// });

module.exports = router;
