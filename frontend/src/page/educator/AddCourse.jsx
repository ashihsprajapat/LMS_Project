import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import toast from "react-hot-toast";

const AddCourse = () => {

    const [title, setTitle]=useState("")
    const [description, setDescription]=useState("")
    const [price, setPrice]=useState(null)
    const [offer_price, setOffer_Price]=useState(null)
    const [thumbnail,setTHumbnail]=  useState(null)
    const [chapter,setChapter]=useState([])
    

    const { axios } = useContext(AppContext);

    const submitHandler = async (e) => {
        e.preventDefalt()
        try {


        } catch (err) {
            console.log(err.message)
            toast.error(err.message)
        }
    }


    return (
        <div className="py-10 flex flex-col justify-between bg-white">
            <form className="md:p-10 p-4 space-y-5 max-w-lg">

                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="Course-name">Course-name</label>
                    <input id="Course-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="Course-name">Course heading</label>
                    <input id="Course-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Course description</label>
                    <textarea id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>

                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price">Course Price</label>
                        <input id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">ADD</button>
            </form>
        </div>
    );
};


export default AddCourse;