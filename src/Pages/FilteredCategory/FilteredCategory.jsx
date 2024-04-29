
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useParams, Link } from "react-router-dom";

const FilteredCategory = () => {
    const { subcategory } = useParams();
    const [filteredPottery, setFilteredPottery] = useState([]);

    useEffect(() => {
        fetch(`https://full-stack-project-assignment10-server.vercel.app/subPotteries/${subcategory}`)
            .then(res => res.json())
            .then(data => {
                const matchedPottery = data.filter(item => item.subcategory === subcategory);
                setFilteredPottery(matchedPottery);
            })
    }, [subcategory]);


    return (
        <div className="mt-28">
          <div className="m-2 md:m-10 grid gap-10">
          {filteredPottery.map(item => (
                <div key={item._id} className="card bg-base-100 shadow-xl flex flex-col items-center p-2 md:px-10 text-center">
                    <img src={item.image} alt={item.item_name} className="mb-4 w-64 h-52" />
                    <h2 className="font-medium"><span className="font-bold">Product Name:</span> {item.item_name}</h2>
                    <p className="font-medium"><span className="font-bold">Sub Category:</span> {item.subcategory}</p>
                    <p className="text-sm">{item.description}</p>
                    <p className="font-medium"><span className="font-bold">Price:</span> {item.price}</p>
                    <p className="font-medium"><span className="font-bold">Rating:</span> {item.rating}</p>
                    <p className="font-medium"><span className="font-bold">Time:</span> {item.time}</p>
                    <Link to={`/viewDetail/${item._id}`}><button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087] mb-5">View Details</button></Link>
                </div>
            ))}
          </div>
        </div>
    );
};

export default FilteredCategory;

FilteredCategory.propTypes = {
    ceramic: PropTypes.object
};
