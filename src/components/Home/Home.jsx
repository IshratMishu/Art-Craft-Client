import { useLoaderData } from "react-router-dom";
import CardsData from "../../Pages/CardsData/CardsData";
import ComingSoon from "../../Sections/ComingSoon";
import Pottery from "../../Sections/Pottery";
import Banner from "../Banner/Banner";
import bg from '../../assets/images/vaseq.png';
import SubPotteryData from "../../Pages/SubPotteryData/SubPotteryData";

const Home = () => {
    const potteryClay = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Pottery></Pottery>
            <div className="text-center space-y-3 mt-10 md:mt-5 mb-10" style={{ backgroundImage: `url(${bg})`}}>
                <p className="text-sm">Latest Products</p>
                <h1 className="text-2xl">~PERFECT DECOR PIECES FOR DAILY LIFE~</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-4 overflow-hidden">
                {
                   potteryClay.slice(0,6).map(potter => <CardsData key={potter._id} potter={potter}></CardsData>)
                }
            </div>
            <ComingSoon></ComingSoon>
            <SubPotteryData></SubPotteryData>
        </div>
    );
};

export default Home;