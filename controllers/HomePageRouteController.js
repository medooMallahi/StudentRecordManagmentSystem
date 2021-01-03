const User = require("../models/User");

exports.studentRecord = (req, res, next) => {
  const studentId = req.body.studentId;

  User.findOne({ studentId })
    .then((student) => {
      console.log(student);
      if (!student)
        return res.json({
          existence: false,
        });

      return res.status(200).json({ student });
    })
    .catch();
}; // end of HomePageRoute
