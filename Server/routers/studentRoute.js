// Import modules
const express = require("express");
const router = express.Router();
// Import controllers
const studentController = require("../controllers/studentController");

// .../students
router.route("/")
    .get(studentController.getAllStudents)
    .post(studentController.createStudent);

// .../students/:id
router.route("/:id")
    .get(studentController.getStudentById)
    .put(studentController.updateStudentById)
    .delete(studentController.deleteStudentById);

router.route("/search/:name")
    .get(studentController.getStudentByName);

// Export router
module.exports = router;