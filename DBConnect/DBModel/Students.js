const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  class: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("student", StudentSchema);
