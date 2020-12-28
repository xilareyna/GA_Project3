const express = require("express");
const merchantRoutes = express.Router();
const Merchant = require("../models/merchant.js");

/////////
//Index
/////////

merchantRoutes.get("/", async (req, res) => {
  try {
    const foundProduct = await Merchant.find({});
    res.status(200).json(foundProduct);
  } catch (error) {
    res.status(400).json(error);
  }
});

/////////
//Delete
/////////

merchantRoutes.delete("/:id", async (req, res) => {
  try {
    const deletedMerchant = await Merchant.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedMerchant);
  } catch (error) {
    res.status(400).json(error);
  }
});

/////////
//Update
/////////

merchantRoutes.put("/:id", async (req, res) => {
  try {
    const updatedMerchant = await Merchant.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedMerchant);
  } catch {
    res.status(400).json(error);
  }
});

/////////
//Create
/////////

merchantRoutes.post("/", async (req, res) => {
  try {
    const createdProduct = await Merchant.create(req.body);
    res.status(200).json(createdProduct);
  } catch (error) {
    res.status(400).json(error);
  }
});

/////////
//Show
/////////
merchantRoutes.get("/:id", async (req, res) => {
  try {
    const showMerhcant = await Merchant.findById(req.params.id);
    res.status(200).json(showMerhcant);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = merchantRoutes;
