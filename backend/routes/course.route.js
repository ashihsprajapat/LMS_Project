
import express from 'express'
import { addCourse, enrolleCourse, getAllCourse, getCourseDetails, getEnrolledCourse, lectureAsComplete } from '../controller/course.controller.js';
import { courseProtect } from '../middleware.js/courseProtect.js';
const courseRouter = express.Router()

courseRouter.route("/addCourse")
    .post( courseProtect, addCourse)

courseRouter.route('/:id')
    .get(getCourseDetails)

courseRouter.route("/getEnrolledCourse")
    .get( courseProtect, getEnrolledCourse)

courseRouter.route("/lectureAsComplete/:id")
    .post( courseProtect, lectureAsComplete)


courseRouter.route("/enrolledCourser")
    .get( courseProtect, enrolleCourse)


courseRouter.route("/course")
.get(getAllCourse)



export default courseRouter;