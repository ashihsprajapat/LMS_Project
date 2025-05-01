
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import humanizeDuration from "humanize-duration"


const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate();

    const [allCourse, setAllCourse] = useState([]);

    const [isEducator, setEducator] = useState(true);

    const [dashboardCurr, setDashboardCurr] = useState(0);

    const [enrolledCourses, setEnrolledCourses] = useState([]);

    // fetch all course 
    let allCourseFetch = async () => {
        setAllCourse((dummyCourses))
    }

    //fetch all enrolled coursed
    const fetchEnrolledCourses = async () => {
        setEnrolledCourses(dummyCourses);
    }


    //calculate to average rating of course
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }

        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            return totalRating += rating.rating;
        })

        return totalRating / course.courseRatings.length;
    }

    //calculate chapter time;
    const calculateChapterTime = (chaper) => {
        let time = 0;
        chaper.chapterContent.map((lecture) => time += lecture.lectureDuration)

        return humanizeDuration(time * 60 * 100, { unites: ['h', 'm'] });
    }

    //course duration
    const courseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter, i) => chapter.chapterContent.map((lecture) => time += lecture.lectureDuration));

        return humanizeDuration(time * 60 * 100, { unites: ['h', 'm'] });
    }

    //calculate total no of chapre
    const calculateNoofChapter = (course) => {
        let no = 0;
        course.courseContent.forEach((chapter) => {
            if (Array.isArray(chapter.chapterContent)) {
                no += chapter.chapterContent.length
            }

        })
        return no;
    }

    //calculateRating(dummyCours)

    useEffect(() => {
        allCourseFetch()
        fetchEnrolledCourses();

    }, [])
    //console.log(allCourse)
    const value = {
        currency, allCourse, navigate, calculateRating, isEducator, setEducator
        , calculateChapterTime, courseDuration, calculateNoofChapter, humanizeDuration,
        dashboardCurr, setDashboardCurr,
        enrolledCourses, setEnrolledCourses
    }

    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )

}

export default AppContext;
