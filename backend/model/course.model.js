
import mongoose, { model, Schema } from 'mongoose';
import { Chapter } from './chapter.model.js';

const courseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    price: { type: Number, required: true },
    offer_price: { type: Number, required: true },
    chapters: [
        {
            type: Schema.Types.ObjectId,
            ref: "Chapter",
        }
    ],
    appliedStudent: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
}, { timestamps: true })

export const Course = model("Course", courseSchema);