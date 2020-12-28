require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const merchantController = require("./controllers/merchant");
const merchantRoutes = require("./controllers/merchant");
const MONGOURI = process.env.MONGODB_URI;
const { show } = require("./stuff.js").show; // const show = { show: console.log }.show

app.use(express.json());

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

mongoose.connection.on("error", (err) => {
  show(err.message);
});
mongoose.connection.on("disconnected", () => {
  show("Hey you disconnected from Mongo");
});
mongoose.connection.once("open", () => {
  show("connected to Mongo");
});

app.use("/merchant", merchantController);

app.listen(PORT, () => {
  show("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
