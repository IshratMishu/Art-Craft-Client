import { useLoaderData } from "react-router-dom";
import CardsData from "../../Pages/CardsData/CardsData";
import ComingSoon from "../../Sections/ComingSoon";
import Pottery from "../../Sections/Pottery";
import Banner from "../Banner/Banner";

const Home = () => {
    const pottery = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Pottery></Pottery>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-4 overflow-hidden" >
                {
                    pottery.map(potter => <CardsData key={potter._id} potter={potter}></CardsData>)
                }
            </div>
            <ComingSoon></ComingSoon>
        </div>
    );
};

export default Home;