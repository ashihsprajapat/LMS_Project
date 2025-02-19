import React from 'react'
import { assets } from './../../assets/assets';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const isCourseList=location.pathname.includes("course-list")
  return (
    <div className={`flex  items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 bg-green  `}>
      <img src={assets.logo} alt="" className='w-28 lg:w-32 cursor-pointer' />
      <div className='hidden md:flex  item-center text-gray-500'>
        <div>
          <button>Beome Educator </button>
          <Link to="/my-enrollements" >My Enrollement</Link>
        </div>

      </div>
      <button className='bg-glue-600 text-white px-5 py-2 rounded-full '>Creat Account</button>
      <div>

      </div>
    </div>
  )
}
