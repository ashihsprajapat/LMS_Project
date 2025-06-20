
import { NavLink, Outlet } from 'react-router-dom';
import { assets } from './../../assets/assets';
import { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';

const Educator = () => {

    const { navigate, dashboardCurr, setDashboardCurr } = useContext(AppContext)

    




    const sidebarLinks = [
        { name: "Dashboard", path: "/educator/educator", icon: <img src={assets.home_icon} /> },
        { name: "Add Course", path: "/educator/add-course", icon: <img src={assets.add_icon} /> },
        { name: "My Course", path: "/educator/my-course", icon: <img src={assets.my_course_icon} /> },
        { name: "Student Enrolled", path: "/educator/student-enrolled", icon: <img src={assets.person_tick_icon} /> },
    ];

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <a href="/">
                    <img className="h-9" src={assets.logo} alt="dummyLogoColored" />
                </a>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <img src={assets.user_icon} alt="" />
                    <button className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className='flex flex-row '>


                <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-200">
                    {sidebarLinks.map((item, index) => (
                        <NavLink to={item.path} key={index}
                            onClick={() => setDashboardCurr(index)}
                            className={`flex items-center py-3 px-4 gap-3 
                            ${index === dashboardCurr ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                                    : "hover:bg-gray-100/90 border-white text-gray-700"
                                }`
                            }
                        >
                            {item.icon}
                            <p className="md:block hidden text-center">{item.name}</p>
                        </NavLink>
                    ))}
                </div>

                <div>
                    <Outlet />
                </div>

            </div>
        </>
    );
};

export default Educator;