const User = require("../models/User");

exports.getAllStudents = (req, res, next) => {
  User.find({})
    .then((students) => {
      return res.status(200).json({ students });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addStudentCourse = (req, res, next) => {
  const courseName = req.body.name;
  const courseGrade = req.body.grade;

  User.findOne({ studentId: req.body.studentId })
    .then((user) => {
      user.registeredCourses.push({
        name: courseName,
        grade: courseGrade,
        semester: 20201,
      });
      return user.save();
    })
    .then(() => {
      return User.findOneAndUpdate(
        { studentId: req.body.studentId },
        { $inc: { paid: 100, credits: 3 } }
      );
    })
    .then(() => {
      return res.status(200).json({ added: true });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({ added: false });
    });
};

exports.getStudentCourses = (req, res, next) => {
  const studentId = req.body.studentId;
  console.log(studentId);
  User.findOne({ studentId })
    .then((user) => {
      return res.status(200).json({ courses: user.registeredCourses });
    })
    .catch((err) => console.log(err));
};
