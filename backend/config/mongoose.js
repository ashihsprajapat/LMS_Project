
import mongoose from "mongoose";
import "dotenv/config"

let ConnectTODataBase = async () => {
    await mongoose.connect(process.env.MONGO_URL);
}

export default ConnectTODataBase;