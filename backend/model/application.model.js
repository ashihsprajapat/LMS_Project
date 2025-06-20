
import mongoose ,{model, Schema} from 'mongoose';
import { User } from './user.model.js';
import { Course } from './course.model.js';


const applicationSchema=new Schema({
    userId:{type:Schema.Types.ObjectId,ref:"User"},
    courseId:{type:Schema.Types.ObjectId, ref:"Course"}
}, {timestamps:true})
