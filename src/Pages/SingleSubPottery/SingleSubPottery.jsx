import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SingleSubPottery = ({ ceramic }) => {
    const { subcategory, image, description } = ceramic;

    return (
       <Link to={`/filteredCategory/${subcategory}`}>
        <div className="card bg-base-100 shadow-xl hover:bg-[#81c784]">
            <h2 className="text-2xl mt-10 font-bold text-center">{subcategory}</h2>
            <figure className="px-10 pt-10">
                <img src={image} alt="pottery" className="rounded-xl w-80 h-72" />
            </figure>
            <p className='text-sm text-center px-5 mt-3'>{description}</p>
            <div className="card-body items-center text-center">
                <p className="hover:text-black hover:text-bold hover:bg-[#81c784] hover:opacity-45 transition-opacity duration-300 absolute inset-0 flex justify-center items-center opacity-0">
                    Click
                </p>
            </div>
        </div>
       </Link>
    );
};

export default SingleSubPottery;

SingleSubPottery.propTypes = {
    ceramic: PropTypes.object
}