const express = require("express");
const Router = express.Router();
const StudentContoller = require("../controllers/StudentsRoutesController");

Router.get("/api/students", StudentContoller.getAllStudents);
Router.post("/api/getStudentCourses", StudentContoller.getStudentCourses);
Router.post("/api/addStudentCourse", StudentContoller.addStudentCourse);

module.exports = Router;
