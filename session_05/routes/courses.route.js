const express = require("express");

const router = express.Router();

const coursesController = require("../controllers/courses.controller.js");
const validationSchema = require("../middlewares/validationSchema.js");


router
  .route("/")
  // Get all courses
  // Route -> Resource
  .get(coursesController.getAllCourses)
  // Create a new course
  .post(
    validationSchema(),
    coursesController.addCourse
  );

router
  .route("/:courseId")
  // Get a course
  .get(coursesController.getCourse)
  // Update a course
  .patch(coursesController.updateCourse)
  // Delete a course
  .delete(coursesController.deleteCourse);

module.exports = router;