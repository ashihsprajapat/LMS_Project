



import mongoose, { Schema , model} from "mongoose";

export const userSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    enrolledCours: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ],


}, { timestamps: true })



export const User = model("User", userSchema);
