
import React from 'react'
import Hero from '../../component/student/Hero'
import Companies from './../../component/student/Companies';
import CourseSection from './../../component/student/CourseSection';

export default function Home() {
    return (
        <div className='flex items-center flex-col space-y-7  text-center '>
            <Hero />
            <Companies />
            < CourseSection />
        </div>
    )
}
