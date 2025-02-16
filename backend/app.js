



import express from "express"
import cors from "cors";
import mongoose from "mongoose";
import ConnectTODataBase from "./config/mongoose.js";
import "dotenv/config";
import { clerkwebhooks } from "./controller/webhooks.js";


const app = express();
//connect to database
ConnectTODataBase()
    .then(() => console.log("Connect ot database LMS_Project"))

app.use(cors());


app.get("/", (req, res) => {
    res.send("ok working")
})

app.post("/clerk", express.json(), clerkwebhooks);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("App is listing on port", PORT)
})

