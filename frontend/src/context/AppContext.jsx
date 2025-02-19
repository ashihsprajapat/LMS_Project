
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate();

    const [allCourse, setAllCourse] = useState([]);

    const [isEducator, setEducator]=useState(true);

    // fetch all course 
    const allCourseFetch = () => {
        setAllCourse((dummyCourses))
    }

   
    //calculate to average rating of course
    const calculateRating = ( course ) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }

        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            return totalRating += rating.rating;
        })

        return totalRating / course.courseRatings.length;
    }
    //calculateRating(dummyCours)

    useEffect(() => {
        allCourseFetch()

    }, [])

    const value = {
        currency, allCourse, navigate, calculateRating, isEducator, setEducator

    }

    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )

}

export default AppContext;
