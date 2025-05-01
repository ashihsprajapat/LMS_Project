
import React from 'react'
import { assets } from './../../assets/assets';

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-white md:px-36 text-left w-full mt-10'>
            <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
                <div className='flex flex-col md:items-start items-center w-full'>
                    <img src={assets.logo_dark} alt="" />
                    <p className='mt-6 text-center  md:text-left text-sm text-white/80' >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                </div>
                <div className='flex flex-col md:item-start items-center w-full'>
                    <h2 className='font-semibold text-white mb-5'>Company</h2>
                    <ul className='flex  md:flex-col items-left  justify-between text-sm  text-white/80 md:space-y-2'>
                        <li> <a className='text-white-500 cursor-pointer' href="#">Home</a>  </li>
                        <li><a className='text-white-500 cursor-pointer' href=" # " >About us </a></li>
                        <li><a className='text-white-500 cursor-pointer' href=" #" >Contact us </a></li>
                        <li><a className='text-white-500 cursor-pointer' href=" #" >Privacy policy </a></li>
                    </ul>
                </div>
                <div className='hidden md:flex flex-col item-start w-full'>
                    <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
                    <p className='text-sm text-white/80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className=' flex items-center gap-2 pt-4'>
                        <input className=' rounded-lg border border-gray-500/30 text-gray-500 placeholder-gray-500   outline-none w-64 h-9 bg-gray-800 px-2 text-sm' type="text" placeholder='Enter your email' />
                        <button className='bg-blue-600 text-white w-24 h-9 rounded   '>Subscribe</button>
                    </div>
                </div>
            </div>
            <p className='text-center mt-4 mb-5'>Copyright 2024 © GreatStack. All Right Reserved.</p>

        </footer>
    )
}
