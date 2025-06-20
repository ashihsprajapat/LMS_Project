
import express from 'express'
import { addCourse } from '../controller/course.controller.js';
const courseRouter= express.Router()

courseRouter.route("/addCourse")
.post( addCourse )





export default courseRouter;