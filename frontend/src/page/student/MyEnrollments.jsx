
import React, { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import { Line } from 'rc-progress'
import Footer from '../../component/student/Footer';

export default function MyEnrollments() {
  const { enrolledCourses, setEnrolledCourses, courseDuration, navigate } = useContext(AppContext);

  const [progressArray, setProgressArrays] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 3 },
    { lectureCompleted: 7, totalLectures: 7 },
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 5, totalLectures: 8 },
    { lectureCompleted: 4, totalLectures: 4 },
    { lectureCompleted: 2, totalLectures: 2 },
    { lectureCompleted: 7, totalLectures: 9 },
  ]);



  return (
    <>
    <div className='my-10 mx-6'>
      <h1 className='text-3xl font-semibold'>My Enrollemtn </h1>

      <table className='w-full border md:table-auto table-fixed overflow-hidden text-sm '>
        <thead className='text-gray-900 border-b border-gray-500/20 text-sm  text-left max-sm:hidden'>
          <tr>
            <th className='px-4 py-2 font-semibold truncate'>Course</th>
            <th className='px-4 py-2 font-semibold truncate'>Duration</th>
            <th className='px-4 py-2 font-semibold truncate'>Completed</th>
            <th className='px-4 py-2 font-semibold truncate'>Status</th>
          </tr>
        </thead>

        <tbody className='text-green-700'>
          {
            enrolledCourses.map((course, idx) => (
              <tr key={idx} className='border-b border-gray-500/20 '>
                <td className='md:px-4 pl-2 py-3 flex items-center space-x-3'> <img className='w-14 sm:w-24 md:w-28 items-center h-10' src={course.courseThumbnail} />
                  <div className='flex-1'>
                    <p className='mb-1 max-sm:text-sm'> {course.courseTitle}</p>
                    <Line percent={progressArray[idx] ? (progressArray[idx].lectureCompleted *100/ progressArray[idx].totalLectures)  : 0} strokeWidth={2} className='bg-gray-300 rounded-full' />

                  </div>
                </td>
                <td className='px-4 py-3 max-sm:hidden'>
                  {courseDuration(course)}
                </td>
                <td className='px-4 py-3 max-sm:hidden'> {progressArray[idx] && `${progressArray[idx].lectureCompleted}/ ${progressArray[idx].totalLectures}`} <span>Lectures</span>
                </td>

                <td className='px-4 py-3 max-sm:text-right'>
                  <button className='bg-blue-600 px-3 sm:px-5  py-1.5 max-sm:text-xs rounded-md text-white'
                    onClick={() => navigate(`/Player/${course._id}`)} >
                    {progressArray[idx] && progressArray[idx].lectureCompleted / progressArray[idx].totalLectures === 1 ? "completed" : "on Going"}
                  </button>
                </td>

              </tr>
            ))
          }

        </tbody>


      </table>
    </div>

    <Footer/>
    </>
  )
}
