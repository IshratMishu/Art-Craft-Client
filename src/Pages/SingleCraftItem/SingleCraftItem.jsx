import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const SingleCraftItem = ({ singlePottery }) => {
    const { _id, item_name, price, rating } = singlePottery;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl shadow-[#81c784] mt-28">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <Link to={`/viewDetail/${_id}`}> <button className="bg-[#FF497C] py-2 px-3 rounded text-white font-semibold hover:bg-[#988087]">View Details</button></Link>
                    </div>
                    <img className="w-64 h-52 mx-auto rounded-xl shadow-lg shadow-[#81c784]" src={singlePottery.image} alt="" />
                    <div className="overflow-x-auto mt-3 mx-auto">
                        <table className="table">
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td className="font-bold text-xl">Name</td>
                                    <td className="text-lg">{item_name}</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <td className="font-bold text-xl">Price</td>
                                    <td className="text-lg">{price}</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td className="font-bold text-xl">Rating</td>
                                    <td className="text-lg">{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCraftItem;

SingleCraftItem.propTypes = {
    singlePottery: PropTypes.object
}