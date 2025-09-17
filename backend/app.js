



import express from "express"
import cors from "cors";
import mongoose from "mongoose";
import ConnectTODataBase from "./config/mongoose.js";
import "dotenv/config";
import { clerkwebhooks } from "./controller/webhooks.js";
import courseRouter from "./routes/course.route.js";
import userRoute from "./routes/user.route.js";

import { clerkMiddleware } from '@clerk/express'


const app = express();
//connect to database
ConnectTODataBase()
    .then(() => console.log("Connect ot database LMS_Project"))

app.use(cors({
  origin: ['https://lms-project-fawn-eta.vercel.app', 'https://localhost:5173'],
  credentials: true
}));
app.use(clerkMiddleware())


app.get("/", (req, res) => {
    res.send("ok working")
})

app.post("/clerk", express.json(), clerkwebhooks);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("App is listing on port", PORT)
})


app.use("/api/course",courseRouter);

app.use("/api/user", userRoute);