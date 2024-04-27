import { useLoaderData } from "react-router-dom";
import SingleCraftItem from "../SingleCraftItem/SingleCraftItem";


const AllCraftItems = () => {
    const allPottery = useLoaderData();
    return (
         <div className="grid grid-cols-1 md:grid-cols-2 m-3 lg:m-10 gap-10">
            {
                allPottery.map(singlePottery => <SingleCraftItem key={singlePottery._id} singlePottery={singlePottery} ></SingleCraftItem>)
            }
        </div>
    );
};

export default AllCraftItems;