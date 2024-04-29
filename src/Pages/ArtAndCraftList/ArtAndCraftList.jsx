import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import backs from '../../assets/images/pexels-20710970-14341974.jpg';



const ArtAndCraftList = () => {
    const { user } = useAuth() || {};
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("all");
    const [control, setControl] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/addList/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, [user, control]);


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FF497C",
            cancelButtonColor: "#81c784",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            setControl(!control);
                        }
                    })
            }
        })
    }




    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredItems = items.filter((item) => {
        const itemCustomize = item.customize.trim().toLowerCase();
        const filterValue = filter.trim().toLowerCase();

        if (filter === "all") {
            return true;
        } else if (filterValue === "yes") {
            return itemCustomize === "yes";
        } else if (filterValue === "no") {
            return itemCustomize === "no";
        } else {
            return false;
        }
    });

    return (
        <div>
            <div className="text-center md:text-3xl md:font-bold text-xl font-semibold text-[#81c784] mx-auto p-5" style={{ backgroundImage: `url(${backs})`, backgroundSize: 'cover', height: '280px' }}>
                <div className="card glass max-w-[400px] p-1 mt-32 mx-auto">
                    <label htmlFor="customizationFilter">Filter by Customization:</label></div>
                <select
                    id="customizationFilter"
                    value={filter}
                    onChange={handleFilterChange}
                    className="text-[#FF497C] card glass mx-auto px-5 bg-[#81c784]">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="m-5">
                <h1 className="text-center font-semibold text-2xl mt-16 text-gray-700">~Welcome to Your List : Where Fantasies Take Shape! ~</h1>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                    {filteredItems.map((adding) => (
                        <div key={adding._id} className="card bg-base-100 shadow-lg shadow-[#81c784]">
                            <figure><img className="w-96 h-60 p-5" src={adding.image} alt="Pottery" /></figure>
                            <div className="card-body">
                                <h2><span className="font-semibold">Product Name:</span> {adding.item_name}</h2>
                                <p><span className="font-semibold">Price:</span> {adding.price}</p>
                                <p><span className="font-semibold">Rating:</span> {adding.rating}</p>
                                <p><span className="font-semibold">Customizable:</span> {adding.customize}</p>
                                <p><span className="font-semibold">Stock Status:</span> {adding.stockStatus}</p>
                                <div className="card-actions justify-center lg:justify-end">
                                    <Link to={`/updateProducts/${adding._id}`}> <div className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]">Update</div></Link>
                                    <div className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]"
                                        onClick={() => handleDelete(adding._id)}>Delete</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtAndCraftList;
