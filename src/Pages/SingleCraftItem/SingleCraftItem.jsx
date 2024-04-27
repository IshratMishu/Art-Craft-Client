import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SingleCraftItem = ({ singlePottery, idx}) => {
    const { _id, item_name, price, image, subcategory } = singlePottery;

    useEffect(() => {
        AOS.init();
    }, [])

    return (
         <tr>
            <td>{idx+1}</td>
            <td>{item_name}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Craft Item" />
                    </div>
                </div>
            </td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>
                <Link to={`/viewDetail/${_id}`}>
                    <button className="bg-[#FF497C] py-2 px-3 rounded text-white font-semibold hover:bg-[#988087]">
                        View Details
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default SingleCraftItem;

SingleCraftItem.propTypes = {
    singlePottery: PropTypes.object,
    idx: PropTypes.number
}

