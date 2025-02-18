
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/student/Home';
import CourseList from './page/student/CourseList';
import CourseDetail from './page/student/CourseDetail';
import MyEnrollments from './page/student/MyEnrollments';
import Player from './page/student/Player';
import Loading from './component/student/Loading';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList/>}/>
        <Route path="/course-list/:input" element={<CourseList/>}/>
        <Route path="/course/:id" element={<CourseDetail/>}/>
        <Route path="/my-enrollements" element={<MyEnrollments/>}/>
        <Route path="/Player/:courseId" element={<Player/>}/>
        <Route path="/loading/:path" element={<Loading/>}/>

      </Routes>
    </div>
  )
}
