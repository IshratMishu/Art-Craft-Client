import { useLoaderData } from "react-router-dom";
import SingleCraftItem from "../SingleCraftItem/SingleCraftItem";


const AllCraftItems = () => {
    const allPottery = useLoaderData();
    return (
        <div className="mt-28 ">
            <div className="overflow-x-auto m-5 md:m-10 bg-base-100 shadow-md shadow-[#81c784] md:p-5 lg:p-10">
                <table className="table">
                    <thead>
                        <tr className="bg-base-100 shadow-md shadow-[#81c784]">
                            <th></th>
                            <th>Name</th>
                            <th>Picture</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPottery.map((singlePottery,idx) => (
                            <SingleCraftItem
                                key={singlePottery._id}
                                singlePottery={singlePottery}
                                idx={idx}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCraftItems;



