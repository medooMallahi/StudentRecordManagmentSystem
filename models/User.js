const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RegisteredCourses = require("./RegisteredCourses");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  token: {
    type: String,
  },
  studentId: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  gpa: {
    type: Number,
    default: 0,
  },
  paid: {
    type: Number,
    default: 0,
  },
  ToPaid: {
    type: Number,
    default: 0,
  },
  registeredCourses: [RegisteredCourses],
  credits: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", UserSchema);
