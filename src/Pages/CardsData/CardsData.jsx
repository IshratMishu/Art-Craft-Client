import { useLoaderData } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { MdOutlineStarHalf } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CardsData = () => {
    const pottery = useLoaderData();
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-4" >
            {
                pottery.map(potter => <div key={potter._id} className="card bg-base-100 shadow-xl" data-aos="zoom-out">
                    <figure className="px-10 pt-10">
                        <img src={potter.image} alt="pottery" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">{potter.item_name}</h2>
                        <div className="flex items-center gap-16 font-medium">
                            <p className="flex items-center gap-1"><IoIosPricetags className="text-[#81c784]" /> {potter.price}</p>
                            <p className="flex items-center gap-1"><MdOutlineStarHalf className="text-[#81c784]" /> {potter.rating}</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td className="font-bold">Stock Status:</td>
                                        <td className="text-[#81c784] font-medium">{potter.stockStatus}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td className="font-bold">Customizable:</td>
                                        <td className="text-[#81c784] font-medium">{potter.customize}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>{potter.description.slice(0, 80)}...</p>
                        <div className="card-actions">
                            <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]">View Details</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CardsData;