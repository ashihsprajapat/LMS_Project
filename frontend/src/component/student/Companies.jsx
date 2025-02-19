
import React from 'react'
import { assets } from './../../assets/assets';

export default function Companies() {
    return (
        <div className='pt-16'>
            <p className='text-gray-500 text-base'>Trusted by learners from</p>
            <div className='flex flex-wrap justify-center gap-6 md:gap-16 items-center md:mt-10 mt-5  w-full'>
                <img className='w-20 md:w-28 ' src={assets.microsoft_logo} alt="" />
                <img className='w-20 md:w-28 ' src={assets.walmart_logo} alt="" />
                <img className='w-20 md:w-28 ' src={assets.accenture_logo} alt="" />
                <img className='w-20 md:w-28 ' src={assets.adobe_logo} alt="" />
                <img className='w-20 md:w-28 ' src={assets.paypal_logo} alt="" />
            </div>
        </div>
    )
}
