const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  height: {
    type: Number,
    require: true,
  },
  weight: {
    type: Number,
    require: true,
  },
  bmi: {
    type: Number,
    require: true,
  }
});

const Model = new mongoose.model("Model", modelSchema);

module.exports = Model;
