const express = require("express");
const Router = express.Router();
const RegistrationRoutes = require("../controllers/RegistrationRoute");
const fileUpload = require("../middleware/fileUpload");

Router.post(
  "/api/users/register",
  fileUpload.single("image"),
  RegistrationRoutes.register
);
Router.post("/api/users/logIn", RegistrationRoutes.logIn);

Router.get(
  "/api/users/logout",
  RegistrationRoutes.auth,
  RegistrationRoutes.logOut
);
Router.get(
  "/api/users/auth",
  RegistrationRoutes.auth,
  RegistrationRoutes.authing
);

module.exports = Router;
