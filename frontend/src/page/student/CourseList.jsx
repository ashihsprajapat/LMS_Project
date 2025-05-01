
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import AppContext from './../../context/AppContext';
import SearchBar from './../../component/student/SearchBar';
import CourseCard from './../../component/student/CourseCard';
import { assets } from '../../assets/assets';
import Footer from './../../component/student/Footer';

export default function CourseList() {
    const { navigate, allCourse } = useContext(AppContext);
    const { input } = useParams();

    const [filterCourse, setFilterCourse] = useState([]);

    useEffect(() => {
        if (allCourse && allCourse.length > 0) {
            const tempCourse = allCourse.slice();

            input ?
                setFilterCourse(tempCourse.filter((item) => item.courseTitle.toLowerCase().includes(input.toLowerCase())))
                :
                setFilterCourse(tempCourse)
        }

    }, [allCourse, input])

    return (
        <>
            <div className='relative md:px-20 px-6 pt-20 text-left'>
                <div className=' flex md:flex-row flex-col gap-6 item-start justify-between w-full'>

                    <div>
                        <h1 className='text-4xl text-semibold  text-gray-800'>Course List</h1>
                        <p className='text-gray-500'> <span className='cursor-pointer text-blue-800' onClick={() => navigate("/")}> Home</span>   / Course List</p>
                    </div>
                    <div>
                        < SearchBar data={input} />
                    </div>


                </div>
                {
                    input && <div className='flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600 rounded-lg w-fit'>
                        <p>{input} </p>
                        <img src={assets.cross_icon} alt="" className='cursor-pointer' onClick={() => navigate("/course-list")} />
                    </div>
                }

                <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
                    {
                        filterCourse.map((course, idx) => (
                            <CourseCard key={idx} course={course} />
                        ))
                    }

                </div>
            </div>
            <Footer/>

        </>
    )
}
