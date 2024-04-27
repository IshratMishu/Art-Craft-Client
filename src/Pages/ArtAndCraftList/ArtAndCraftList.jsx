// import { useEffect, useState } from "react";
// import useAuth from "../../Hooks/useAuth";


// const ArtAndCraftList = () => {
//     const { user } = useAuth() || {};
//     const [item, setItem] = useState([]);

//     useEffect(()=>{
//         fetch(`http://localhost:5000/addList/${user?.email}`)
//         .then((res) => res.json())
//       .then((data) => {
//         setItem(data);
//       });
//     },[user]);

//     return (
//         <div className="mt-28 grid grid-cols-1 gap-10 md:grid-cols-2 ">
//             {
//                 item?.map(adding => <div key={adding._id} className="card w-96 bg-base-100 shadow-xl">
//                 <figure><img src={adding.image} alt="Pottery" /></figure>
//                 <div className="card-body">
//                   <h2 className="card-title">
//                     {adding.item_name}
//                   </h2>
//                   <p>{adding.price}</p>
//                   <p>{adding.rating}</p>
//                   <p>{adding.customize}</p>
//                   <p>{adding.stockStatus}</p>
//                   <div className="card-actions justify-end">
//                     <div className="badge badge-outline">Update</div> 
//                     <div className="badge badge-outline">Delete</div>
//                   </div>
//                 </div>
//               </div>)
//             }
//         </div>
//     );
// };

// export default ArtAndCraftList;

import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const ArtAndCraftList = () => {
    const { user } = useAuth() || {};
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("all"); // Default filter value

    useEffect(() => {
        fetch(`http://localhost:5000/addList/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, [user]);

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
        <div className="mt-36">
            <div className="text-center md:text-3xl md:font-bold text-xl font-semibold text-[#81c784] mx-auto p-5">
                <label htmlFor="customizationFilter" className="">Filter by Customization:</label>
                <select
                    id="customizationFilter"
                    value={filter}
                    onChange={handleFilterChange}
                    className="text-[#FF497C]"
                >
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            {/* Display filtered items */}
            <div className="m-5">
                <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
                    {filteredItems.map((adding) => (
                        <div key={adding._id} className="card bg-base-100 shadow-xl">
                            <figure><img className="w-96 h-96" src={adding.image} alt="Pottery" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{adding.item_name}</h2>
                                <p>{adding.price}</p>
                                <p>{adding.rating}</p>
                                <p>{adding.customize}</p>
                                <p>{adding.stockStatus}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Update</div>
                                    <div className="badge badge-outline">Delete</div>
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
