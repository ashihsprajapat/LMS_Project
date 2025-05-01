
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '../../context/AppContext';
import Loading from './../../component/student/Loading';
import { assets } from './../../assets/assets';
import Footer from './../../component/student/Footer';
import Youtube from 'react-youtube'

export default function CourseDetail() {
    const { id } = useParams();

    const [courseData, setCourseData] = useState(null);


    const [opentSection, setOpenSection] = useState({});

    const { currency, allCourse, calculateRating, calculateChapterTime, courseDuration, calculateNoofChapter, humanizeDuration } = useContext(AppContext);


    const getCourse = async () => {
        let courseFind = allCourse.find((course) => course._id === id);

        if (courseFind) {
            setCourseData([courseFind]); // keep it wrapped in an array if the rest of your code expects array
        } else {
            console.warn("Course not found for id:", id);
        }

    }


    useEffect(() => {
        getCourse();

    }, [id, allCourse,])


    const [isAreadyEnrolled, setIsAreadyEnrolled] = useState(true)

    const [playerData, setPlayerData] = useState(null)


    const toggelSection = (idx) => {
        setOpenSection((prev) => ({ ...prev, [idx]: !prev[idx] }))
    }





    return courseData != null ? (<>
        <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between
        md:px-36 px-8 md:pt-20 text-left '>
            <div className='absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70'></div>
            {/* left column */}
            <div className='max-w-xl z-10 text-gray-500'>
                <h1 className=' md:text-course-deatils-heading-large
                text-course-deatils-heading-small font-semibold  text-gray-800 '> course {courseData[0].courseTitle}</h1>
                <p dangerouslySetInnerHTML={{ __html: courseData[0].courseDescription.slice(0, 200) }} className='pt-4 md:text-base text-sm' ></p>

                {/* course revire and rating */}
                <div className='flex ietms-center space-x-2 pt-3 pb-1 text-sm'>
                    <p>{calculateRating(courseData[0])}</p>
                    <div className=' flex items-center  '>
                        {
                            [...Array(5)].map((_, i) =>
                                <img src={i < Math.floor(calculateRating(courseData[0])) ? assets.star : assets.star_blank
                                } key={i} alt='raitng' className='w-3.4 h-3.5' />
                            )
                        }
                    </div>
                    <p className='text-blue-500'>({courseData[0].courseRatings.length} {courseData[0].courseRatings.length > 1 ? 'ratings' : 'rating'} )</p>

                    <p>{courseData[0].enrolledStudents.length}
                        {courseData[0].enrolledStudents.length > 1 ? "students" : "student"}
                    </p>
                </div>

                <p>
                    Course br <span className='text-blue-600 underline'>Ashish Prajapat</span>
                </p>

                <div className='pt-7 text-gray-800'>
                    <h2 className='text-xl font-semibold'>Course Structure</h2>
                    <div className='pt-5'>
                        {courseData[0].courseContent.map((chapter, idx) => (

                            <div key={idx} className='border border-gray-300 bg-white mb-2 rounded' >

                                <div className='flex  items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={() => toggelSection(idx)}>
                                    <div className='flext items-center gap-2'>
                                        <img src={assets.down_arrow_icon} alt=""
                                            className={`transform transition-transform ${opentSection[idx] ? "rotate-180" : ""}  `} />
                                        <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle} </p>
                                    </div>
                                    <p className='text-sm md:text-default'>
                                        {chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}
                                    </p>
                                </div>

                                {
                                    opentSection[idx] &&

                                    <div className={`overflow-hidden transition-all duration-300 ${opentSection[idx] ? "max-h-96" : "max-h-19"}  `}>
                                        <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                                            {
                                                chapter.chapterContent.map((lecture, i) => (
                                                    <li key={i} className='flex items-center gap-2 py-1' >
                                                        <img src={assets.play_icon} alt="" className='w-4 h-4 mt-1' />
                                                        <div className='flex items-center  justify-between w-full text-gray-800 text-xs md:text-default' >
                                                            <p>
                                                                {lecture.lectureTitle}
                                                            </p>
                                                            <div className='flex  gap-2'>
                                                                {lecture.isPreviewFree && <p className='text-blue-500 cursor-pointer'
                                                                    onClick={() => setPlayerData({
                                                                        videoId: lecture.lectureUrl.split('/').pop(),
                                                                    })}
                                                                >Preview</p>}
                                                                <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
                                                            </div>
                                                        </div>

                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                }

                            </div>
                        ))}

                    </div>
                </div>
                <div className='py-20 text-sm md:text-default'>
                    <h3 className='text-2xl text-gray-800 font-semibold md:text-2xl'>Course Description</h3>
                    <h1 className=' md:text-course-deatils-heading-small mt-4
                text-course-deatils-heading-small font-semibold  text-gray-800 '>{courseData[0].courseTitle}</h1>
                    <p
                        dangerouslySetInnerHTML={{ __html: courseData[0].courseDescription.slice(0, 200) }} className='pt-4 md:text-base text-sm rich-text' ></p>

                </div>


            </div>

            {/* right column */}
            <div className='  max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none
            overflow-hidden bg-white min-w-[300px] sm:min-w-[420px] '>
                {
                    playerData ?
                        <Youtube videoId={playerData.videoId} opts={{ playerVars: { autoplay: 1 } }} iframeClassName='
                    w-full asspect video' />
                        :
                        <img src={courseData[0].courseThumbnail} alt="" />
                }
                <div className='pt-5'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.time_left_clock_icon} alt="time left clock" className='w-3.5' />
                        <p className='text-red-500 '> <span className='font-medium'>5 Days </span> left at this price</p>
                    </div>
                    <div className='flex items-center gap-3 pt-2 '>
                        <p className='text-gray-800  md:text-4xl text-2xl font-semibold '>
                            {currency} {(courseData[0].coursePrice - courseData[0].discount * courseData[0].coursePrice / 100).toFixed(2)}
                        </p>
                        <p className='md:text-lg text-gray-500 line-through'>
                            {currency} {courseData[0].coursePrice}
                        </p>
                        <p className='md:text-lg text-gray-500'>{courseData[0].discount}%off</p>
                    </div>
                    <div className='pt-4 flex items-center text-sm md:text-default gap-4 md:pt-4 text-gray-500'>
                        <div className='flex items-center  gap-1'>
                            <img src={assets.star} alt="star" />
                            <p>{calculateRating(courseData[0])}</p>
                        </div>
                        <div className='flex items-center  gap-1'>
                            <div className='h-4 w-px bg-gray-500/40'> </div>
                            <div className='flex items-center  gap-1'>
                                <img src={assets.time_clock_icon} alt="star" />
                                <p>{courseDuration(courseData[0])}</p>
                            </div>
                        </div>
                        <div className='flex items-center  gap-1'>
                            <div className='h-4 w-px bg-gray-500/40'> </div>
                            <div className='flex items-center  gap-1'>
                                <img src={assets.lesson_icon} alt="star" />
                                <p>{calculateNoofChapter(courseData[0])} lessons</p>
                            </div>
                        </div>

                    </div>
                    <button className='bg-blue-600 text-white font-medium w-full mt-4 md:mt-6 py-3 rounded '>
                        {isAreadyEnrolled ? "Already Enrolled" : "Enroll Now"}</button>
                    <div>
                        <p className='text-lg md:text-xl font-medium  text-gray-800 '>What's in the course?</p>
                        <ul className='ml-4 pt-2  text-sm md:text-default  list-disc text-gray-500'>
                            <li>Lifetime access with free updates.</li>
                            <li>Step-by-step, hands-on project guidance.</li>
                            <li>Downloadable resources and source code.</li>
                            <li>Quizzes to test your knowledge.</li>
                            <li>Certificate of completion.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    ) : <Loading />
}
