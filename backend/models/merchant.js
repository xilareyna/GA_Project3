const { Schema, model } = require("mongoose");

const merchantSchema = Schema({
  productName: { type: String, required: true },
  type: { type: String, required: true },
  img: { type: String, required: false },
  price: { type: Number, required: true },
  description: { type: String, requied: true },
});

module.exports = model("Merchant", merchantSchema);
