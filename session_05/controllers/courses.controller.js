const {validationResult} = require("express-validator");
let { courses } = require("../data/courses.js");


const getAllCourses =  (req, res) => {
  res.json(courses);
};

const getCourse = (req, res) => {
  // const courseId = parseInt(req.params.courseId); // anything comes from URL is always String
  const courseId = +(req.params.courseId);
  // console.log(typeof courseId, courseId);
  const course = courses.find((course) => course.id === courseId);
  console.log(course);
  if (!course) {
    return res.status(404).json({msg: "Course Not Found!"});
  }
  res.json(course);
};

const addCourse = (req, res) => {

    // console.log(req.body);
    // todo: Fix this
    const errors = validationResult(req);

    // console.log("errors", errors);

    // todo: Fix this
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }


    // if (!req.body.title) {
    //   return res.status(400).json({error: "title not provided!"});
    // }
    // if (!req.body.price) {
    //   return res.status(400).json({error: "price not provided!"});
    // }


    const course = { id: courses.length + 1, ...req.body };
    courses.push(course);

    // Status code 201 => successful and created
    res.status(201).json(course);
};

const updateCourse =  (req, res) => {
  const courseId = +req.params.courseId;

  let course = courses.find((course) => course.id === courseId);

  if(!course) {
    return res.status(404).json({msg: "course not found"});
  }

  course = {...course, ...req.body};

  res.status(200).json(course);
};

const deleteCourse = (req, res) => {
  const courseId = +req.params.courseId;
  courses = courses.filter((course) => course.id !== courseId);
  res.status(200).json({success: true});
};

module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse
}