const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisteredCourses = new Schema({
  name: {
    type: String,
    trim: true,
  },
  grade: {
    type: Number,
  },
  semester: Number,
});

module.exports = RegisteredCourses;
