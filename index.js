const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const HomePageRoute = require("./routes/HomePageRoute");
const RegistrationRoute = require("./routes/RegistrationsRoutes");
const StudentRoutes = require("./routes/StudentRoutes");

app.use(HomePageRoute);
app.use(RegistrationRoute);
app.use(StudentRoutes);

app.use("/images", express.static(path.join(__dirname, "images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
let PORT = process.env.PORT || 7000;

const mongoDbUrl =
  "mongodb+srv://medoo:0592413118@rlck.ifnzw.mongodb.net/Rlck?retryWrites=true&w=majority";

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("connected ");
    app.listen(PORT);
  })
  .catch(() => {
    console.log("Error with connecting to DB");
  });
