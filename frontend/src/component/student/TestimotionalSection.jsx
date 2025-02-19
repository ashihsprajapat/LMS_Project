
import React from 'react'
import { assets, dummyTestimonial } from './../../assets/assets';

export default function TestimotionalSection() {
    return (
        <div className='pb-14 px 8 md:px-0'>
            <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
            <p className='text-gray-500 mt-3 md:text-base '>Hear from our learners as they share their journeys of transformation, success, and how our <br />
                platform has made a difference in their lives.</p>
            <div className='grid grid-cols-auto  gap-8 mt-14'>
                {
                    dummyTestimonial.map((testimo, idx) => {
                        return <div key={idx} className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg  bg-white shadow-[0px_4px_15px_0px] overflow-hidden shadow-black/5' >

                            <div className='flex item-center  gap-4 px-5 py-4 bg-gray-500/10 '>

                                <img className='w-12 h-12 rounded-full' src={testimo.image} alt={testimo.name} />
                                <div className=''>
                                    <h1 className='text-lg font-medium text-gray-800'>{testimo.name}</h1>
                                    <p className='text-gray-800/80'>{testimo.role}</p>

                                </div>
                            </div>
                            <div className='p-3 pb-7'>
                                <div className='flex gap-0.5 '>
                                    {
                                        [...Array(5)].map((_, i) => (<img key={i} src={i < Math.floor(testimo.rating) ? assets.star : assets.star_blank} alt="star" className='h-5' />))
                                    }
                                </div>
                                <p className='text-gray-500 mt-3 '>{testimo.feedback}</p>
                                <a href="#" className='text-blue-500 underline '>Read moew</a>
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    )
}
