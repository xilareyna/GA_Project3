const { Schema, model } = require("mongoose");

const merchantSchema = Schema({
  productName: { type: String, required: true },
  type: { type: String, required: false },
  img: { type: String, required: false },
  price: { type: Number, required: false },
  description: { type: String, requied: false },
});

module.exports = model("Merchant", merchantSchema);
