const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  from: { type: String, required: true, trim: true },
  to: { type: String, required: true, trim: true, unique: true },
  allflights: Object,
});

const model = new mongoose.model("flightdata", Schema);
module.exports = model;
