
import { Application } from 'svix/dist/api/application.js';
import cloudinary from './../config/claudinary.js';
import { Course } from './../model/course.model.js';
import { User } from '../model/user.model.js';
import { Chapter } from '../model/chapter.model.js';
import { resolve } from 'path';

export const addCourse = async (req, res) => {
    try {

        const userId = req.user.id;
        const { title, description, price, offer_price, chapters } = req.body;

        if (!title || !description || !price || !offer_price || !chapters)
            return res.json({ success: false, message: "all Details are required" })

        const image = req.files;
        if (!iamge)
            return res.json({ success: false, message: "thumbnail are required" })

        const chaptersId=[]

        const createdChapters = await Promise.all(
            chapters.map(async (chapter) => {
                const newChapter= await Chapter.create(chapter);
                return chaptersId.push(newChapter._id)
            })
        );





        const result = await cloudinary.uploader.upload(imagePath, options);

        const thumbnail = result.secure_url;

        const newCourse = new Course({ title, description, thumbnail, price, offer_price, chapters:chaptersId })

        await newCourse.save()

        res.json({ success: true, message: "Course add successfully", course: newCourse })





    } catch (err) {
        console.log(err)
        res.json({ message: err.message, success: false })
    }
}


export const getEnrolledCourse = async (req, res) => {
    try {

        const userId = req.user._id;

        const appliedCourse = await Application.find({ userId }).populate("courseId").populate("Chapter")

        res.json({ success: true, messgae: "applied course", enrollerdCourse:appliedCourse })

    } catch (err) {
        console.log(err)
        res.json({ success: false, message: err.message })
    }
}


export const enrolleCourse = async (req, res) => {
    try {
        const userId = req.user._id;
        const { courseId } = req.body;

        const newApplication = new Application({ userId, courseId })
        await newApplication.save()

        const enrolledCours = req.user.enrolledCours;
        enrolledCours.push(courseId);

        await User.findOneAndUpdate({ _id: userId, enrolledCours })

        const course = await Course.findById(courseId)

        const appliedStudent = course.appliedStudent;
        appliedStudent.push(userId);
        await Course.findOneAndUpdate({ _id: courseId, appliedStudent });

        res.json({ success: true, message: "you have apply", enrolledCourse: newApplication, })


    } catch (err) {
        console.log(err)
        res.json({ message: err.message, success: false })
    }
}

export const lectureAsComplete = async (req, res) => {
    try {

        const userId = req.user._id;
        const { companyId,chapterId } = req.body;




    } catch (err) {
        console.log(err)
        res.json({ message: err.message, success: false })
    }
}


export const getCourseDetails=async(req,res)=>{
    try{
        const courseId=req.params.id

        const course= await Course.findById(courseId).populate("Chapter")

        res.json({success:true, course})

    }catch(err){
        console.log(err.message)
        res.json({success:false, message:err.message})
    }
}


export const getAllCourse= async(req, res)=>{
    try{
        console.log("req comming")
        const allCourse=await Course.find({})


        res.json({success:false, allCourse})

    }catch(err){
        console.log(err.message)
        res.json({messaeg:err.messaeg, success:false})
    }
}