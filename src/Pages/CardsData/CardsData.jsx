import { Link } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { MdOutlineStarHalf } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PropTypes from 'prop-types';


const CardsData = ({ potter }) => {
    const { _id, item_name, price, rating, image, customize, stockStatus, description } = potter;

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="card bg-base-100 shadow-xl" data-aos="zoom-out">
            <figure className="px-10 pt-10">
                <img src={image} alt="pottery" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{item_name}</h2>
                <div className="flex items-center gap-16 font-medium">
                    <p className="flex items-center gap-1"><IoIosPricetags className="text-[#81c784]" /> {price}</p>
                    <p className="flex items-center gap-1"><MdOutlineStarHalf className="text-[#81c784]" /> {rating}</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td className="font-bold">Stock Status:</td>
                                <td className="text-[#81c784] font-medium">{stockStatus}</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td className="font-bold">Customizable:</td>
                                <td className="text-[#81c784] font-medium">{customize}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>{description.slice(0, 80)}...</p>
                <div className="card-actions">
                    <Link to={`/viewDetail/${_id}`}><button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CardsData;

CardsData.propTypes = {
    potter: PropTypes.object
}