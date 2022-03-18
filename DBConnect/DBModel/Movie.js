const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("movie", MovieSchema);
