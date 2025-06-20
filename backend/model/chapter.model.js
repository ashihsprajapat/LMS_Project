
import mongoose, { model, Schema } from 'mongoose';

const chapterSchema = new Schema({
    name: { type: String, required: true },
    lectures: [
        {
            title: { type: String, required: true },
            duretion: { type: Number, required: true },
            url: { type: String, required: true },
            isPreviewFree: { type: Boolean, default: false },
            isComplete: { type: Boolean, default: false }
        }
    ]
}, {timestamps:true})

export const Chapter = model("Chapter", chapterSchema);
