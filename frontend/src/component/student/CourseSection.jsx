
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import AppContext, { AppContextProvider } from '../../context/AppContext';

export default function CourseSection() {

    const { allCourse } = useContext(AppContext)
    return (
        <div className='py-16 md:py-40 px-8'>
            <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
            <p className='text-sm md:text-base text-gray-500 mt-3'>Discover our top-rated courses across various categories. From coding and design to <br /> business and wellness, our courses are crafted to deliver results.</p>

            <div className='grid grid-cols-auto px-4 md:px-0 md:py-16 my-10 gap-4'>
                {
                    allCourse.slice(0, 4).map((course, indx) => <CourseCard key={indx} course={course} />)
                }
            </div>



            <Link to={"/course-list"} onClick={() => scroll(0, 0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'> Show all course</Link>

        </div>
    )
}
