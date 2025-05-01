import { dummyDashboardData, dummyStudentEnrolled } from "../../assets/assets";

const Desboard = () => {

    const products = [
        { name: "Casual Shoes", category: "Shoes", offerPrice: 999, inStock: true, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png", },
        { name: "Casual Shoes", category: "Shoes", offerPrice: 999, inStock: false, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png", },
        { name: "Casual Shoes", category: "Shoes", offerPrice: 999, inStock: true, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png", },
    ];

    return (
        <div className="flex-1 py-10 flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">Letest Enrolled</h2>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">#</th>
                                <th className="px-4 py-3 font-semibold truncate">Student name</th>
                                <th className="px-4 py-3 font-semibold truncate">Course Title</th>
                                <th className="px-4 py-3 font-semibold truncate hidden md:block">Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {dummyStudentEnrolled.map((course, index) => (
                                <tr key={index} className="border-t border-gray-500/20">
                                    <td className="px-4 py-3 max-sm:hidden">{index}</td>
                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                        <div className="border border-gray-300 rounded p-2">
                                            <img src={course.student.imageUrl} alt="Product" className="w-16" />

                                        </div>
                                        <span className="truncate max-sm:hidden w-full">{course.student.name}</span>
                                    </td>
                                    <td className="px-4 py-3">{course.courseTitle}</td>

                                    <td className="px-4 py-3">
                                        {Date.now(course.purchaseDate)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Desboard;