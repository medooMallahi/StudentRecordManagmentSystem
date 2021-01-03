const express = require("express");
const Router = express.Router();
const HomePageRouteController = require("../controllers/HomePageRouteController");

Router.post(
  "/api/getStudentInformation",
  HomePageRouteController.studentRecord

);

module.exports = Router;
