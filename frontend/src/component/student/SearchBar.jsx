
import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import {useNavigate} from 'react-router-dom'

export default function SearchBar({data}) { 

    const navigate=useNavigate("");
    const [input, setInput]= useState( data ? date :"");

    const handleOnSearch=(e)=>{
        e.preventDefault();
        navigate("/course-list/"+input)
    }
;    return (
        <form onSubmit={handleOnSearch} action="" className='max-w-xl mx-auto w-full md:h-14 flex items-center rounded bg-white border border-gray-500/29 '>
            <img src={assets.search_icon} alt="search_icon" className='md:w-auto w-10 px-3 ' />
            <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Seach for Courses' className='w-full h-full text-fray-500 outline-none text-gray-500/80 ' />
            <button className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1' type='submit'>search</button>
        </form>
    )
}
