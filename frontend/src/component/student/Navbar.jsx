import React, { useContext } from 'react'
import { assets } from './../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useClerk, UserButton, useUser } from "@clerk/clerk-react"
import AppContext from '../../context/AppContext';

export default function Navbar() {

  const { navigate, isEducator } = useContext(AppContext);

  const isCourseListPage = location.pathname.includes("/course-list")

  const { openSignIn } = useClerk();

  const { user } = useUser();
  return (
    <div className={`flex  items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 bg-green ${isCourseListPage ? "bg-white" : "bg-cyan-100/70"}  `}>
      <img onClick={() => navigate("/")} src={assets.logo} alt="" className='w-28 lg:w-32 cursor-pointer' />
      <div className='hidden md:flex  item-center text-gray-500 gap-5'>
        <div className='flex items-center  gap-5' >
          {user && <>
            <button onClick={() => navigate("/educator")} >{isEducator ? "Educaor Deshboard" : "Be come Educator"} </button> |
            <Link className='' to="/my-enrollements" >My Enrollement</Link> </>}
        </div>
        {
          user ? <UserButton /> : <button className='bg-blue-600 text-white px-5 py-2 rounded-full ' onClick={() => openSignIn()} >Creat Account</button>
        }

      </div>
      {/* for phon screen */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          {user &&
            <>
              <button onClick={() => navigate("/educator")} >{isEducator ? "Educaor Deshboard" : "Be come Educator"} </button> |
              <Link className='' to="/my-enrollements" >My Enrollement</Link>
            </>}
        </div>
        {
          user ? <UserButton />
            :
            <button onClick={() => openSignIn()} ><img src={assets.user_icon} alt="" /></button>
        }

      </div>
    </div>
  )
}
