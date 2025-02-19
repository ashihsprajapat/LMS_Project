
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { dummyCourses } from '../assets/assets';


const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;

    const [allCourse, setAllCourse] = useState([]);

    const allCourseFetch = () => {
        setAllCourse((dummyCourses))
    }

    useEffect(() => {
        allCourseFetch()

    }, [])

    const value = {
        currency, allCourse

    }

    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )

}

export default AppContext;
