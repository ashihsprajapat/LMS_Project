
import React from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import Home from './page/student/Home';
import CourseList from './page/student/CourseList';
import CourseDetail from './page/student/CourseDetail';
import MyEnrollments from './page/student/MyEnrollments';
import Player from './page/student/Player';
import Loading from './component/student/Loading';
import Educator from './page/educator/Educatior';
import Desboard from './page/educator/Desboard';
import AddCourse from './page/educator/AddCourse';
import MyCourse from './page/educator/MyCourse';
import StudentEnrolled from './page/educator/StudentEnrolled';
import Navbar from './component/student/Navbar';

export default function App() {

  const isEducatorRoute= useMatch("/educator/*")

  return (
    <div className='text-default min-h-screen bg-white' >
      {
        !isEducatorRoute &&<Navbar/>
      }
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/my-enrollements" element={<MyEnrollments />} />
        <Route path="/Player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Desboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-course" element={<MyCourse />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>

      </Routes>
    </div>
  )
}
