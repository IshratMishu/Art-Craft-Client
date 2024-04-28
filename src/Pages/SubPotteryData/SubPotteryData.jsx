import { useEffect, useState } from "react";
import SingleSubPottery from "../SingleSubPottery/SingleSubPottery";


const SubPotteryData = () => {

const [ceramics, subCeramics] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/subPotteries')
    .then(res => res.json())
    .then(data =>{
        subCeramics(data);
    })
},[])
    
    return (
        <div className="mt-28 m-2">
            <h1 className="text-lg font-medium text-center text-gray-600">Filter our products by selecting your chosen subcategory of handcrafted pottery, renowned for <br /> its rustic charm and versatility. Click cards to explore our Collection.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-4 mt-16">
            {
            ceramics.map(ceramic=> <SingleSubPottery key={ceramic._id} ceramic={ceramic}></SingleSubPottery>)
            }
        </div>
        </div>
    );
};

export default SubPotteryData;
