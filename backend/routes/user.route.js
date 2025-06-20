
import express from 'express'
import { getUserData } from '../controller/user.controller.js';
const userRoute=express.Router()

userRoute.route("/user")
.get(getUserData)




export default userRoute;