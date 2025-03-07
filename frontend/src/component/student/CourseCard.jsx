
import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import AppContext, { AppContextProvider } from '../../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'


export default function CourseCard({ course }) {
    const { currency, calculateRating } = useContext(AppContext)

    const navogate= useNavigate("");


    return (
        <Link to={'/course/' + course._id} onClick={() => scrollTo(0, 0)}
            className=' border border-gray-500/30 pb-6 overflow-hidden rounded-lg'
        >
            <img className='w-full' src={course.courseThumbnail} alt="" />
            <div className='p-3 text-left'>
                <h2>{course.courseTitle}</h2>
                <p>{`${course.educator.name} name`}</p>
                <div className='flex ietms-center space-x-2'>
                    <p>{calculateRating(course)}</p>
                    <div className=' flex items-center  '>
                        {
                            [...Array(5)].map((_, i) =>
                                <img src={i <Math.floor(calculateRating(course)) ? assets.star : assets.star_blank
                                } key={i} alt='raitng' className='w-3.4 h-3.5' />
                            )
                        }
                    </div>
                    <p className='text-gray-500'>{course.courseRatings.length}</p>
                </div>
                <p className='text-base font-semibold text-gray-800' >{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)} </p>

            </div>
        </Link>
    )
}
